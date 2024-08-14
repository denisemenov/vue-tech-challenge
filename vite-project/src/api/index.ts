import data from "../../../node-backend/data/activities.json";

interface Activity {
  id: number;
  title: string;
  price: number;
  currency: string;
  rating: number;
  specialOffer: boolean;
}

export const getActivities = () => {
  return new Promise<Activity[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
