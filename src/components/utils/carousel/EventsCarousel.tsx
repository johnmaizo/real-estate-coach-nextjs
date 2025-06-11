"use client";

import {useState} from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import {ChevronLeft, ChevronRight, Close} from "@mui/icons-material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroupCarousel from "../buttons/ButtonGroupCarousel";

// Sample data structure
export type GalleryCategory = "natcon" | "jumpstart" | "unitManagers";

export type GalleryImage = {
  id: number;
  src: string;
  title: string;
  images?: string[];
};

const categories = [
  {id: "natcon", label: "Natcon"},
  {id: "jumpstart", label: "Jumpstart Your Real Estate"},
  {id: "unitManagers", label: "Unit Managers Conference"},
];

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    slidesToSlide: 1,
  },
};

export default function EventsCarousel({
  galleryData,
}: {
  galleryData: Record<GalleryCategory, GalleryImage[]>;
}) {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>("natcon");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedSubImageIndex, setSelectedSubImageIndex] = useState(0);

  const currentImages = galleryData[selectedCategory] || [];

  const handleCategoryChange = (categoryId: GalleryCategory) => {
    setSelectedCategory(categoryId);
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setSelectedSubImageIndex(0); // Start with the first image in the array
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedSubImageIndex(0);
  };

  const handlePrevImage = () => {
    if (selectedImage && selectedImage.images) {
      const prevIndex =
        selectedSubImageIndex > 0
          ? selectedSubImageIndex - 1
          : selectedImage.images.length - 1;
      setSelectedSubImageIndex(prevIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedImage && selectedImage.images) {
      const nextIndex =
        selectedSubImageIndex < selectedImage.images.length - 1
          ? selectedSubImageIndex + 1
          : 0;
      setSelectedSubImageIndex(nextIndex);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedSubImageIndex(index);
  };

  return (
    <Box sx={{display: "flex", height: "100%", width: "100%"}}>
      {/* Left Sidebar */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
        }}>
        {/* <Box sx={{p: 3, py: 0}}> */}
        <Box>
          <List sx={{p: 0, minWidth: "270px"}}>
            {categories.map((category) => (
              <ListItem key={category.id} disablePadding>
                <ListItemButton
                  selected={selectedCategory === category.id}
                  onClick={() =>
                    handleCategoryChange(category.id as GalleryCategory)
                  }
                  sx={{
                    borderRadius: 2,
                    "&.Mui-selected": {
                      bgcolor: "transparent",
                      textDecoration: "underline",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}>
                  <ListItemText
                    primary={category.label}
                    slotProps={{
                      primary: {
                        style: {
                          fontFamily: "Outfit",
                          fontSize: "1.2rem",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Right Content Area */}
      <Box sx={{width: "100%"}}>
        <Box sx={{position: "relative"}}>
          <Carousel
            responsive={responsive}
            autoPlay={false}
            ssr={true}
            infinite={true}
            draggable={false}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroupCarousel />}>
            {currentImages.map((image) => (
              <Box
                key={image.id}
                sx={{
                  px: 2,
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(image)}>
                <Box
                  sx={{
                    overflow: "hidden",
                    position: "relaive",
                  }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.title}
                    sx={{
                      height: "100%",
                      maxHeight: {
                        lg: "450px",
                        md: "300px",
                        sm: "300px",
                        xs: "300px",
                      },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box sx={{position: "absolute", bottom: 20, left: 20}}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Outfit",
                        fontSize: "30px",
                        color: "white",
                        fontWeight: 400,
                      }}>
                      {image.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>

      {/* Full Screen Image Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={handleCloseModal}
        maxWidth={"lg"}
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.61)",
          boxShadow: "none",
          m: 0,
          zIndex: 99999,
          overflow: "auto",
        }}>
        <DialogContent sx={{p: 0, position: "relative"}}>
          <Box
            sx={{
              p: 0,
              position: "relative",
              display: "flex",

              flexDirection: "column",

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent !important",
              overflow: "auto",
            }}>
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                },
              }}>
              <Close />
            </IconButton>
            {/* Previous Button */}
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                },
              }}>
              <ChevronLeft />
            </IconButton>
            {/* Next Button */}
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                },
              }}>
              <ChevronRight />
            </IconButton>
            {/* Main Image */}
            {selectedImage && selectedImage.images && (
              <Box sx={{position: "relative"}}>
                <Box
                  component="img"
                  src={selectedImage.images[selectedSubImageIndex]}
                  alt={`${selectedImage.title} - Image ${
                    selectedSubImageIndex + 1
                  }`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: "black",
                    fontFamily: "Outfit",
                    position: "absolute",
                    top: 20,
                    left: 20,
                  }}>
                  {selectedImage.title}
                </Typography>
              </Box>
            )}
          </Box>

          {/* Thumbnails */}
          {selectedImage && selectedImage.images && (
            <Box
              sx={{
                display: "flex",
                justifyContent:
                  selectedImage.images.length > 8 ? "start" : "center",
                gap: 2,
                position: "absolute",
                zIndex: 9999,
                bottom: 0,
                width: "100%",
                overflowX: "scroll",
                py: 2,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}>
              {selectedImage.images.map((img, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => handleThumbnailClick(idx)}
                  sx={{
                    width: 100,
                    height: 60,
                    objectFit: "cover",
                    cursor: "pointer",
                    opacity: selectedSubImageIndex === idx ? 1 : 0.6,
                    border:
                      selectedSubImageIndex === idx
                        ? "2px solid white"
                        : "none",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      opacity: 1,
                      transform: "scale(1.05)",
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
