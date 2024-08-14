import { getActivities } from "../api";
import { createStore } from "vuex";

interface Activity {
  id: number;
  title: string;
  price: number;
  currency: string;
  rating: number;
  specialOffer: boolean;
}

export interface RootState {
  isSortBy: string;
  isSortAsc: boolean;
  isShowSpecialOffers: boolean;
  title: string;
  priceFrom: number;
  priceTo: number;
  allActivities: Activity[];
  filteredActivities: Activity[];
  isLoading: boolean;
}

const state = (): RootState => ({
  isSortBy: "Rating",
  isSortAsc: false,
  isShowSpecialOffers: false,
  title: "",
  priceFrom: 0,
  priceTo: 0,
  allActivities: [],
  filteredActivities: [],
  isLoading: false,
});

const mutations = {
  setTitle(state: RootState, payload: string) {
    state.title = payload;
  },
  setShowSpecialOffer(state: RootState, payload: boolean) {
    state.isShowSpecialOffers = payload;
  },
  setPriceFrom(state: RootState, payload: number) {
    state.priceFrom = payload;
  },
  setPriceTo(state: RootState, payload: number) {
    state.priceTo = payload;
  },
  setAllActivities(state: RootState, payload: Activity[]) {
    state.allActivities = payload;
  },
  setFilteredActivities(state: RootState) {
    let activities = [...state.allActivities];
    if (state.isShowSpecialOffers) {
      activities = activities.filter((a) => a.specialOffer);
    }
    if (state.title.length) {
      activities = activities.filter((a) =>
        a.title.toLowerCase().includes(state.title.toLowerCase())
      );
    }
    if (state.priceFrom) {
      activities = activities.filter((a) => state.priceFrom <= a.price);
    }
    if (state.priceTo) {
      activities = activities.filter((a) => a.price <= state.priceTo);
    }

    if (state.isSortBy === "Rating") {
      activities.sort((a, b) => a.rating - b.rating);
    }

    if (state.isSortBy === "Title") {
      activities.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (state.isSortBy === "Price") {
      activities.sort((a, b) => a.price - b.price);
    }

    state.filteredActivities = state.isSortAsc
      ? activities
      : activities.reverse();
  },
  setLoading(state: RootState, payload: boolean) {
    state.isLoading = payload;
  },
  setSortBy(state: RootState, payload: string) {
    state.isSortBy = payload;
  },
  setSortAsc(state: RootState, payload: boolean) {
    state.isSortAsc = payload;
  },
};

const actions = {
  async getAllActivities({ commit }: { commit: any }) {
    commit("setLoading", true);

    const all = await getActivities();
    commit("setLoading", false);
    commit("setAllActivities", all);
    commit("setFilteredActivities");
  },
};

const getters = {};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
