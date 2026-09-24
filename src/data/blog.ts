export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
  cta1?: {
    heading: string;
    copy: string;
    buttonText: string;
    buttonLink: string;
  };
  cta2?: {
    heading: string;
    copy: string;
    buttonText: string;
    buttonLink: string;
  };
}

import { postFixIptvQualityDrops } from "./posts/fix-iptv-quality-drops";
import { postBestIptvSubscriptionGuide } from "./posts/best-iptv-subscription-guide";
import { postWatchLiveSportsIptvGuide } from "./posts/watch-live-sports-iptv-guide";
import { postHowToChooseBestIptvService } from "./posts/how-to-choose-best-iptv-service";
import { postFixIptvNotWorkingProblems } from "./posts/fix-iptv-not-working-problems";
import { postBestIptvStreamingDevices } from "./posts/best-iptv-streaming-devices";
import { postInternetSpeedForIptvGuide } from "./posts/internet-speed-for-iptv-guide";
import { postIptvVsStreamingServicesComparison } from "./posts/iptv-vs-streaming-services-comparison";

export const blogPosts: BlogPost[] = [
  postFixIptvQualityDrops,
  postBestIptvSubscriptionGuide,
  postWatchLiveSportsIptvGuide,
  postHowToChooseBestIptvService,
  postFixIptvNotWorkingProblems,
  postBestIptvStreamingDevices,
  postInternetSpeedForIptvGuide,
  postIptvVsStreamingServicesComparison,
];
