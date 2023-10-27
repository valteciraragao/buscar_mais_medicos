interface LoginParams {
  email: string;
  password: string;
}
interface UserApi {
  content: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    profiles: string[];
    specialties: [
      {
        id: number;
        name: string;
        enabled: boolean;
      }
    ];
    phone: string;
    address: string;
    enabled: boolean;
    totalElements: number;
  }[];
}

interface CountUser {
  total: number;
  totalDoctors: number;
  totalContractor: number;
}
