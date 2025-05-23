"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface ContentCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

// Props for our component
interface GridLayoutProps {
  cards: ContentCard[];
}

export default function GridLayout({cards}: GridLayoutProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{px: {sm: 0, md: 5}}}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "0.5fr 1fr",
          gap: 3,
        }}>
        {/* First large card - left column */}
        {cards[0] && (
          <Card
            sx={{
              padding: 2,
              borderRadius: "25px",
              backgroundColor: "#F4F4F4",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: 0,
              cursor: "pointer",
              transition: "0.3s",
              border: "2px solid #C7C4C4",
              "&:hover": {
                transform: "translateY(-3px)",
              },
            }}>
            <CardMedia
              component="img"
              sx={{
                borderRadius: "20px",
                objectFit: "cover",
              }}
              image={cards[0].imageUrl}
              alt={cards[0].title}
              loading="lazy"
              draggable={false}
              aria-hidden={true}
            />
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                pt: 2,
              }}>
              <Box>
                <Typography
                  variant="h6"
                  component="h2"
                  fontFamily={"Inter"}
                  fontSize={"25px"}
                  gutterBottom>
                  {cards[0].title}
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily={"Inter"}
                  fontSize={"18px"}
                  lineHeight={"25px"}
                  color="#696969">
                  {cards[0].description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Right column - nested grid for 3 cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {sm: "1fr", md: "1fr 1fr"},
            gap: 2,
            height: "100%",
          }}>
          {/* Top card - spans full width */}
          {cards[1] && (
            <Card
              sx={{
                gridColumn: "1 / -1",
                padding: 2,
                borderRadius: "25px",
                backgroundColor: "#F4F4F4",
                display: {sm: "block", md: "flex"},
                boxShadow: 0,
                cursor: "pointer",
                transition: "0.3s",
                border: "2px solid #C7C4C4",
                "&:hover": {
                  transform: "translateY(-3px)",
                },
              }}>
              <CardMedia
                component="img"
                sx={{
                  borderRadius: "20px",
                  width: "100%",
                }}
                image={cards[1].imageUrl}
                alt={cards[1].title}
                loading="lazy"
                draggable={false}
                aria-hidden={true}
              />
              <CardContent
                sx={{
                  "&:last-child": {pb: isMobile ? 2 : 1},
                  width: "100%",
                  maxWidth: {sm: "100%", md: "400px"},
                }}>
                <Typography
                  variant="h6"
                  component="h2"
                  fontFamily={"Inter"}
                  fontSize={"25px"}
                  gutterBottom>
                  {cards[1].title}
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily={"Inter"}
                  fontSize={"18px"}
                  lineHeight={"25px"}
                  color="#696969">
                  {cards[1].description}
                </Typography>
              </CardContent>
            </Card>
          )}

          {/* Bottom two cards - each takes one column */}
          {cards.slice(2, 4).map((card) => (
            <Card
              key={card.id}
              sx={{
                padding: 2,
                borderRadius: "25px",
                backgroundColor: "#F4F4F4",
                display: "flex",
                flexDirection: "column",
                boxShadow: 0,
                cursor: "pointer",
                transition: "0.3s",
                border: "2px solid #C7C4C4",
                "&:hover": {
                  transform: "translateY(-3px)",
                },
              }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                image={card.imageUrl}
                alt={card.title}
                loading="lazy"
                draggable={false}
                aria-hidden={true}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 1,
                  "&:last-child": {pb: 1},
                }}>
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    fontFamily={"Inter"}
                    fontSize={"25px"}
                    gutterBottom
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily={"Inter"}
                    fontSize={"18px"}
                    lineHeight={"25px"}
                    color="#696969"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                    {card.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Remaining cards in standard grid layout */}
      {cards.length > 4 && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 3,
            mt: 4,
          }}>
          {cards.slice(4).map((card) => (
            <Card
              key={card.id}
              sx={{
                padding: 2,
                borderRadius: "25px",
                backgroundColor: "#F4F4F4",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: 0,
                cursor: "pointer",
                transition: "0.3s",
                border: "2px solid #C7C4C4",
                "&:hover": {
                  transform: "translateY(-3px)",
                },
              }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  height: isMobile ? 200 : "auto",
                  objectFit: "cover",
                }}
                image={card.imageUrl}
                alt={card.title}
                loading="lazy"
                draggable={false}
                aria-hidden={true}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    fontFamily={"Inter"}
                    fontSize={"25px"}
                    gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily={"Inter"}
                    fontSize={"18px"}
                    lineHeight={"25px"}
                    color="#696969">
                    {card.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}
