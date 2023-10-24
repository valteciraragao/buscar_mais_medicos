interface LoginParams {
  email: string;
  password: string;
}

interface UserApi {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profiles: [];
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
}
