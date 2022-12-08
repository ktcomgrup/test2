import { Box, Flex, Heading, Text, Stack, useColorModeValue, Image, SimpleGrid, } from '@chakra-ui/react';
import SectionContainer from "../common/section/SectionContainer";

const PartnerCard = ({ children }) => {
  return <Box>{children}</Box>;
};

const PartnerCardContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'blue.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const PartnerCardHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} textAlign={'center'}>
      {children}
    </Heading>
  );
};

const PartnerCardText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const PartnerCardTextImage = ({ src, name, title, }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Image src={src} w={60} h={'auto'} alt={"card-image"}/>
    </Flex>
  );
};

export default function PartnerCardWithAvatar() {
  return (
    <SectionContainer id={'#partnerships'}>
      <SimpleGrid
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 6, md: 4, lg: 8 }}
        columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
      >
        <PartnerCard>
          <PartnerCardContent>
            <PartnerCardHeading>Asociatia pentru Cooperare si Promovare Proiecte</PartnerCardHeading>
            <PartnerCardText>
              Asociatia pentru Cooperare si Promovare Proiecte (ACOPOR) este o asociatie profesionala non-profit,
              fondata in anul 2008. Scopul ACOPOR este sa reprezinte interesele celor din sectorul constructiilor si al
              promotorilor din Romania, prin intermediul consultantei, informarii si formarii, promovand modernizarea si
              calificarea profesionala atat a angajatorilor, cat si a angajatilor conform pietei actuale. Asociatia are
              o capacitate operationala demonstrata in implementarea proiectului “Siguranta in Constructii” POSDRU
              /63/3.2/S/35058, prin formarea a 1220 de tehnicieni, conducatori intemediari si muncitori din sectorul
              constructiilor in domeniul sanatatii si sigurantei in munca si prin informarea a peste 50.000 de persoane
              cu privire la prevenirea riscurilor profesionale.
            </PartnerCardText>
          </PartnerCardContent>
          <PartnerCardTextImage
            src={'http://elearningfoundation.ro/wp-content/uploads/2016/11/acopor.jpg'}
            name={'Asociatia pentru Cooperare si Promovare Proiecte'}
            title={'CEO at ABC Corporation'}
          />
        </PartnerCard>
        <PartnerCard>
          <PartnerCardContent>
            <PartnerCardHeading>Asociatia pentru Promovarea si Dezvoltarea Industriei Turistice in
              Romania</PartnerCardHeading>
            <PartnerCardText>
              Asociatia pentru Promovarea si Dezvoltarea Industriei Turistice in Romania este o asociatie de organizatii
              private active in domeniul turismului sau in domenii conexe. Scopul organizatiei este acela de a facilita
              dezvoltarea durabila a activitatilor turistice in Romania prin actiuni precum: formarea personalului activ
              in domeniu, cresterea calitatii informarii, atragerea de fonduri pentru promovarea si dezvoltarea
              serviciilor turistice in tara. Asociatia urmareste apararea intereselor membrilor sai si cresterea
              calitatii serviciilor turistice in Romania, inclusiv prin: organizarea de mese rotunde si seminarii de
              informare, stabilirea de parteneriate si initiative de cooperare, realizarea de schimburi de experienta si
              de bune practici cu actori internationali care practica turismul traditional sau inovativ.
            </PartnerCardText>
          </PartnerCardContent>
          <PartnerCardTextImage
            src={'http://elearningfoundation.ro/wp-content/uploads/2016/11/logo-apditur.png'}
            name={'Asociatia pentru Promovarea si Dezvoltarea Industriei Turistice in Romania'}
            title={'CEO at ABC Corporation'}
          />
        </PartnerCard>
        <PartnerCard>
          <PartnerCardContent>
            <PartnerCardHeading>Felguera Tecnologias de la Informacion S.A.</PartnerCardHeading>
            <PartnerCardText>
              Felguera Tecnologias de la Informacion S.A. este o filiala a Duro Felguera, una dintre
              principalele companii de inginerie si echipamente din Spania. Aceasta companie este furnizor de servicii
              avansate de informatii in domeniul sistemelor logistice, sisteme de informatii si management
              antreprenorial, proiecte Internet, software industrial, securitate si identificare produse. Activitatile
              principale constau in: comercializarea si executarea de servicii de sisteme de inginerie, servicii de
              informatica, echipamente si proiecte de electronica si robotizare; comercializarea si elaborarea de
              studii, proiecte si aplicatii de informatica si organizare antreprenoriala, formare in domeniul sistemelor
              de inginerie, informatica de gestiune, aplicatii electronice, in general si metode de organizare
              antreprenoriala.
            </PartnerCardText>
          </PartnerCardContent>
          <PartnerCardTextImage
            src={'http://elearningfoundation.ro/wp-content/uploads/2016/11/felguera.png'}
            name={'Felguera Tecnologias de la Informacion S.A.'}
            title={'CEO at ABC Corporation'}
          />
        </PartnerCard>
      </SimpleGrid>
    </SectionContainer>
  );
}