import {
  GalleryCategory,
  GalleryImage,
} from "@/components/utils/carousel/EventsCarousel";

const generateImageUrls = () => {
  const baseUrl =
    "https://filipinohomes123.s3.ap-southeast-1.amazonaws.com/ares/Event+Photos/Ares+Event+";
  return Array.from({length: 218}, (_, i) => `${baseUrl}(${i}).JPG`);
};

export const EventsGalleryData: Record<GalleryCategory, GalleryImage[]> = {
  natcon: [
    {
      id: 1,
      src: "https://filipinohomes123.s3.ap-southeast-1.amazonaws.com/ares/Event+Photos/Ares+Event+(1).JPG",
      title: "National Real Estate Convention 2024",
      images: generateImageUrls(),
    },
    {
      id: 2,
      src: "https://picsum.photos/id/102/2400/1080",
      title: "National Real Estate Convention 2023",
      images: [
        "https://picsum.photos/id/105/2400/1080",
        "https://picsum.photos/id/106/2400/1080",
        "https://picsum.photos/id/107/2400/1080",
        "https://picsum.photos/id/108/2400/1080",
      ],
    },
    {
      id: 3,
      src: "https://picsum.photos/id/103/2400/1080",
      title: "National Real Estate Convention 2022",
      images: [
        "https://picsum.photos/id/109/2400/1080",
        "https://picsum.photos/id/110/2400/1080",
        "https://picsum.photos/id/111/2400/1080",
        "https://picsum.photos/id/112/2400/1080",
      ],
    },
    {
      id: 4,
      src: "https://picsum.photos/id/104/2400/1080",
      title: "National Real Estate Convention 2021",
      images: [
        "https://picsum.photos/id/113/2400/1080",
        "https://picsum.photos/id/114/2400/1080",
        "https://picsum.photos/id/115/2400/1080",
        "https://picsum.photos/id/116/2400/1080",
      ],
    },
  ],
  jumpstart: [
    {
      id: 5,
      src: "https://picsum.photos/id/117/2400/1080",
      title: "Jumpstart Workshop 2024",
      images: [
        "https://picsum.photos/id/117/2400/1080",
        "https://picsum.photos/id/118/2400/1080",
        "https://picsum.photos/id/119/2400/1080",
      ],
    },
    {
      id: 6,
      src: "https://picsum.photos/id/120/2400/1080",
      title: "Jumpstart Seminar 2023",
      images: [
        "https://picsum.photos/id/120/2400/1080",
        "https://picsum.photos/id/121/2400/1080",
        "https://picsum.photos/id/122/2400/1080",
      ],
    },
    {
      id: 7,
      src: "https://picsum.photos/id/123/2400/1080",
      title: "Jumpstart Bootcamp 2022",
      images: [
        "https://picsum.photos/id/123/2400/1080",
        "https://picsum.photos/id/124/2400/1080",
        "https://picsum.photos/id/125/2400/1080",
      ],
    },
  ],
  unitManagers: [
    {
      id: 8,
      src: "https://picsum.photos/id/126/2400/1080",
      title: "Unit Managers Conference 2024",
      images: [
        "https://picsum.photos/id/126/2400/1080",
        "https://picsum.photos/id/127/2400/1080",
        "https://picsum.photos/id/128/2400/1080",
      ],
    },
    {
      id: 9,
      src: "https://picsum.photos/id/129/2400/1080",
      title: "Unit Managers Meeting 2023",
      images: [
        "https://picsum.photos/id/129/2400/1080",
        "https://picsum.photos/id/130/2400/1080",
        "https://picsum.photos/id/131/2400/1080",
      ],
    },
    {
      id: 10,
      src: "https://picsum.photos/id/132/2400/1080",
      title: "Unit Managers Summit 2022",
      images: [
        "https://picsum.photos/id/132/2400/1080",
        "https://picsum.photos/id/133/2400/1080",
        "https://picsum.photos/id/134/2400/1080",
      ],
    },
  ],
};
