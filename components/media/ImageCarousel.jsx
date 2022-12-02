import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container, Flex, Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { motion } from "framer-motion";
import { useFadeIn } from "../../animations";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const cards = [
  {
    title: 'OBIECTIVE',
    text: "Fundatia are ca scop cresterea calitatii si eficientei in educatie si formarea profesionala, pe tot parcursul vietii, stimularea si sustinerea competitivitatii si inovarii si adaptarea educatiei si cercetarii la schimbarile ce au loc in societate.",
    image: 'http://elearningfoundation.ro/wp-content/uploads/2016/11/obiective.jpg',
    button: {
      text: "Afla mai mult",
      link: "link1"
    }
  },
  {
    title: 'PARTENERI',
    text: "Prin proiecte finantate si implementate in parteneriat, Fundatia E-LEARNING a contribuit la formarea profesionala a peste 1200 de persoane.",
    image: 'http://elearningfoundation.ro/wp-content/uploads/2016/04/s1-1200.jpg',
    button: {
      text: "Afla mai mult",
      link: "link2"
    }
  },
  {
    title: 'PROIECTE',
    text: "Dorim sa avem un impact pozitiv asupra unui numar mare de tineri prin programe eficiente si in moduri sustenabile. Promovam cultura antreprenoriala si cresterea productivitatii muncii.",
    image: 'http://elearningfoundation.ro/wp-content/uploads/2016/04/s2-1200.jpg',
    button: {
      text: "Afla mai mult",
      link: "link3"
    }
  },
  {
    title: 'MEDIA',
    text: "Imagini si filmari ale proiectelor realizate pana in prezent; poze de la evenimente si conferinte de presa.",
    image: 'http://elearningfoundation.ro/wp-content/uploads/2016/11/mediere.jpg',
    button: {
      text: "Afla mai mult",
      link: "link4"
    }
  },
  {
    title: 'IMPLICA-TE',
    text: "Redirectioneaza 2%. Nu este o donatie, ci un impozit pe care il platesti oricum statului si pe carepoti alege sa il directionezi Fundatiei E-LEARNING pentru a ajuta construirea unui vis.",
    image: 'http://elearningfoundation.ro/wp-content/uploads/2016/04/s3-1200.jpg',
    button: {
      text: "Afla mai mult",
      link: "link5"
    }
  },
];

export default function ImageCarousel() {
  const [slider, setSlider] = useState(null);
  const fadeIn = useFadeIn();

  const navigateTo = (link) => {
    console.log(link)
  }

  return (
    <>
      {
        !!fadeIn ? <Box
          position={'relative'}
          width={'full'}
          overflow={'hidden'}
          // height={{ base: '80vh', md: '600px' }}
          mb={4}
          as={motion.div}
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.animate}
        >
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={{ base: '30%', md: '40px' }}
            top={{ base: '90%', md: '50%' }}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt size="40px" />
          </IconButton>
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={{ base: '30%', md: '40px' }}
            top={{ base: '90%', md: '50%' }}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt size="40px" />
          </IconButton>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <Flex
                id={"box-carousel"}
                key={index}
              >
                <Box
                  display={"flex"}
                  flexDirection={{ base: "column-reverse", md: "row" }}
                  h={{ base: "sm" }}
                >
                  <Box
                    display={{ base: 'none', md: 'inline-block' }}
                    flex={2}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}
                  >
                  </Box>
                  <Box
                    flex={1}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    background={"gray.100"}
                    p={8}
                  >
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="#193877" mb={4}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="#193877" mb={6} textAlign={"justify"}>
                      {card.text}
                    </Text>
                    <Button
                      variant="nav"
                      bg={'primary.800'}
                      color={'white'}
                      w={{ base: '100%', lg: 'md' }}
                      zIndex={2}
                      _hover={{
                        bg: 'gray.300',
                        color: 'primary.800',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      onClick={() => navigateTo(card.button.link)}
                    >
                      {card.button.text}
                    </Button>
                  </Box>
                </Box>
              </Flex>
            ))}
          </Slider>
        </Box> : null
      }
    </>
  );
}