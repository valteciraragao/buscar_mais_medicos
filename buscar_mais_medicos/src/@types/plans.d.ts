interface PlansApi {
  content: [
    {
      id: number;
      planTitle: string;
      enabled: boolean;
      period: string;
      type: string;
      values: number;
      promotionalPrice: null;
    }
  ];
}
