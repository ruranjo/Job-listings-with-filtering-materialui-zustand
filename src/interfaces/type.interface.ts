export interface Job {
    company: string;
    isNew?: boolean;
    isFeatured?: boolean;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    tag: string[];
    icon: string;
  }