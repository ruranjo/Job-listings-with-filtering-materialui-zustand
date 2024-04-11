import { create } from 'zustand';
import { Job } from '../interfaces/type.interface';
import { jobsData } from '../utils/data';

interface JobStore {
    jobsData: Job[];
    tagsFilter: string[];
    setTagsFilter: (tags: string[]) => void;
  }
  
  export const useJobStore = create<JobStore>((set) => ({
    jobsData: jobsData,
    tagsFilter: [],  
    setTagsFilter: (tags) => set({ tagsFilter: tags }),
  }));