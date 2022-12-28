export interface PropsData {
  data: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
    tags: string[];
  };
  handler: (params: any) => any;
}

export default interface Data {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  tags: string[];
}
