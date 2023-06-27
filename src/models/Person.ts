export default interface Person {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  description?: string;
  createdAt: Date;
}
