import axios from 'axios';

// Типы для Google Ads API
export interface CampaignMetrics {
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
  spend: number;
  qualityScore?: number;
}

export interface CampaignAnalysis {
  campaignData: CampaignMetrics;
  recommendations: string[];
  insights: string[];
}

export interface GoogleAdsConfig {
  clientId: string;
  clientSecret: string;
  developerToken: string;
  loginCustomerId: string;
}

class GoogleAdsApiService {
  private config: GoogleAdsConfig | null = null;
  private accessToken: string | null = null;

  setConfig(config: GoogleAdsConfig) {
    this.config = config;
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  // Получение access token из Google OAuth
  async getAccessToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    // Для демонстрации используем моковый токен
    // В реальном приложении здесь будет интеграция с Google OAuth
    this.accessToken = 'mock_access_token_for_demo';
    return this.accessToken;
  }

  private async makeRequest(endpoint: string, data?: any) {
    const accessToken = await this.getAccessToken();

    try {
      const response = await axios.post(
        `https://googleads.googleapis.com/v14/${endpoint}`,
        data,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'developer-token': this.config?.developerToken,
            'login-customer-id': this.config?.loginCustomerId,
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Google Ads API Error:', error);
      throw new Error('Failed to fetch data from Google Ads API');
    }
  }

  async analyzeUrl(url: string): Promise<CampaignAnalysis> {
    try {
      // Получаем access token
      const accessToken = await this.getAccessToken();
      
      if (!this.config) {
        throw new Error('Google Ads API не настроен. Необходимо настроить конфигурацию.');
      }

      // Извлекаем домен из URL для поиска кампаний
      const domain = this.extractDomain(url);
      
      // Поиск кампаний по домену
      const campaigns = await this.searchCampaignsByDomain(domain);
      
      if (campaigns.length === 0) {
        throw new Error(`Кампании для домена ${domain} не найдены`);
      }

      // Получаем метрики для найденных кампаний
      const campaignMetrics = await this.getCampaignMetrics(campaigns);
      
      // Агрегируем данные по всем кампаниям
      const aggregatedData = this.aggregateCampaignData(campaignMetrics);
      
      return {
        campaignData: aggregatedData,
        recommendations: [],
        insights: []
      };
    } catch (error) {
      console.error('Error analyzing URL:', error);
      throw new Error(`Ошибка при анализе URL: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
    }
  }

  private extractDomain(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      throw new Error('Некорректный URL');
    }
  }

  private async searchCampaignsByDomain(domain: string): Promise<any[]> {
    try {
      // Поиск кампаний по домену через Google Ads API
      const query = `
        SELECT 
          campaign.id,
          campaign.name,
          campaign.status,
          campaign.advertising_channel_type
        FROM campaign 
        WHERE campaign.status = 'ENABLED'
        AND campaign.advertising_channel_type = 'SEARCH'
      `;

      const response = await this.makeRequest('customers/' + this.config?.loginCustomerId + '/googleAds:search', {
        query: query
      });

      return response.results || [];
    } catch (error) {
      console.error('Error searching campaigns:', error);
      return [];
    }
  }

  private async getCampaignMetrics(campaigns: any[]): Promise<CampaignMetrics[]> {
    const metrics: CampaignMetrics[] = [];
    
    for (const campaign of campaigns) {
      try {
        const query = `
          SELECT 
            campaign.id,
            metrics.impressions,
            metrics.clicks,
            metrics.cost_micros,
            metrics.conversions,
            campaign_budget.amount_micros
          FROM campaign 
          WHERE campaign.id = ${campaign.campaign.id}
          DURING LAST_30_DAYS
        `;

        const response = await this.makeRequest('customers/' + this.config?.loginCustomerId + '/googleAds:search', {
          query: query
        });

        if (response.results && response.results.length > 0) {
          const result = response.results[0];
          const impressions = parseInt(result.metrics.impressions) || 0;
          const clicks = parseInt(result.metrics.clicks) || 0;
          const costMicros = parseInt(result.metrics.cost_micros) || 0;
          const conversions = parseFloat(result.metrics.conversions) || 0;
          
          metrics.push({
            impressions,
            clicks,
            ctr: impressions > 0 ? (clicks / impressions) * 100 : 0,
            cpc: clicks > 0 ? (costMicros / 1000000) / clicks : 0,
            conversions,
            conversionRate: clicks > 0 ? (conversions / clicks) * 100 : 0,
            spend: costMicros / 1000000
          });
        }
      } catch (error) {
        console.error(`Error getting metrics for campaign ${campaign.campaign.id}:`, error);
      }
    }

    return metrics;
  }

  private aggregateCampaignData(metrics: CampaignMetrics[]): CampaignMetrics {
    if (metrics.length === 0) {
      return {
        impressions: 0,
        clicks: 0,
        ctr: 0,
        cpc: 0,
        conversions: 0,
        conversionRate: 0,
        spend: 0
      };
    }

    const total = metrics.reduce((acc, metric) => ({
      impressions: acc.impressions + metric.impressions,
      clicks: acc.clicks + metric.clicks,
      conversions: acc.conversions + metric.conversions,
      spend: acc.spend + metric.spend
    }), { impressions: 0, clicks: 0, conversions: 0, spend: 0 });

    return {
      impressions: total.impressions,
      clicks: total.clicks,
      ctr: total.impressions > 0 ? (total.clicks / total.impressions) * 100 : 0,
      cpc: total.clicks > 0 ? total.spend / total.clicks : 0,
      conversions: total.conversions,
      conversionRate: total.clicks > 0 ? (total.conversions / total.clicks) * 100 : 0,
      spend: total.spend
    };
  }

  async getCampaigns(): Promise<any[]> {
    try {
      // TODO: Реальная интеграция с Google Ads API
      const mockCampaigns = [
        {
          id: '1',
          name: 'Summer Sale Campaign',
          status: 'ENABLED',
          budget: 1000,
          impressions: 25000,
          clicks: 1800,
          ctr: 7.2
        },
        {
          id: '2',
          name: 'Brand Awareness',
          status: 'ENABLED',
          budget: 2000,
          impressions: 45000,
          clicks: 3200,
          ctr: 7.1
        }
      ];

      return mockCampaigns;
    } catch (error) {
      throw new Error('Failed to fetch campaigns');
    }
  }

  async getKeywords(campaignId: string): Promise<any[]> {
    try {
      // TODO: Реальная интеграция с Google Ads API
      const mockKeywords = [
        {
          id: '1',
          text: 'buy online',
          status: 'ENABLED',
          qualityScore: 8,
          ctr: 5.2,
          cpc: 2.1
        },
        {
          id: '2',
          text: 'best deals',
          status: 'ENABLED',
          qualityScore: 7,
          ctr: 6.8,
          cpc: 1.8
        }
      ];

      return mockKeywords;
    } catch (error) {
      throw new Error('Failed to fetch keywords');
    }
  }
}

export const googleAdsApiService = new GoogleAdsApiService(); 