import LandingPage from "../pages/LandingPage/LandingPage";
import TourDetail from "../pages/LandingPage/pages/TourDetail";

export const routes = [
    {
        path: "/",
        page: LandingPage,
        isShowHeader: false,
    },
    {
        path: "/index",
        page: LandingPage,
        isShowHeader: false,
    },
    {
        path: "/gioi-thieu",
        page: LandingPage,
        isShowHeader: false,
    },
    {
        path: "/san-pham",
        page: LandingPage,
        isShowHeader: false,
    },
    {
        path: "/phap-ly",
        page: LandingPage,
        isShowHeader: false,
    },
    {
        path: "/tuyen-dung",
        page: LandingPage,
        isShowHeader: false,
    },
    {
        path: "/tour-chi-tiet/:id",
        page: TourDetail,
        isShowHeader: false,
    }
];
