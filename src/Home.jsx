import React, { useState, useEffect } from 'react';
import {Flex,Box, Heading, Text, HStack, Img, Button, Icon, InputGroup, Input, InputRightElement, } from '@chakra-ui/react';
import logo from './assets/logo.png'
import ton from './assets/ton.png'
import ston from './assets/ston.jpg'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { CopyIcon, CheckIcon } from '@chakra-ui/icons';


const data = [
  { name: 'LP', value: 75 },
  { name: 'Marketing', value: 25 },
  { name: 'CEX', value: 5 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Home = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
    const changeColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
  
    useEffect(() => {
      const interval = setInterval(changeColor, 2000);
      return () => clearInterval(interval);
    }, []);


    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      try {
        // Logic to copy content to clipboard
        await navigator.clipboard.writeText('Your content to be copied'); // Replace 'Your content to be copied' with your actual content
        setCopied(true);
  
        // After 2 seconds, revert back to initial state
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    };
  
  return (
    <>
  <Flex minH={'100vh'} backgroundColor={'#0088ce'} py={7} px={['5%', '5%', '6%', '6%']} direction={'column'} w={['100%', '100%', '100%', '98.5vw']} gap={5} >


        {/* Heading */}
     <Flex justifyContent={'space-between'} alignItems={'center'} display={['none', 'none', 'flex', 'flex']}>
        <Box>
           <HStack>
            <Img src={logo} w={'5vw'} />
            <Text fontWeight={'bolder'} fontSize={'4xl'}>TCN</Text>
            </HStack> 
        </Box>

      <Box>
      <HStack spacing={10} color={'white'}>
  <Heading as={'h3'}>
    <a href='#home'>Home</a> {/* Use anchor links with href="#section-id" */}
  </Heading>
  <Heading as={'h3'}>
    <a href='#about'>About</a> {/* Use anchor links with href="#section-id" */}
  </Heading>
  <Heading as={'h3'}>
    <a href='#tokenomics'>Tokenomics</a> {/* Use anchor links with href="#section-id" */}
  </Heading>
  <Heading as={'h3'}>
    <a href='#how'>How to buy</a> {/* Use anchor links with href="#section-id" */}
  </Heading>
</HStack>
      </Box>
     </Flex>

     {/* mobile heading */}


     {/* Hero */}
     <Flex id='home' color={'white'} justifyContent={'space-between'} alignItems={'center'}
     direction={['column', 'column', 'row', 'row']}>
        <Box>
            <Heading fontSize={['50px', '50px','60px','60px']} letterSpacing={5}>$TCN - The Closed Network</Heading>
            <Text  fontSize={['md', 'l', 'xl', 'xl']}>Where Only the Chosen Few Experience Crypto in Style</Text>
            <Button  letterSpacing={1} borderRadius={['10px', '10px', '15px', '15px']} h={'7vh'}
            bgColor={'#c72727'} color={'white'}
            _hover={{
                color: 'white',
                bgColor: 'transparent',
                border: '2px solid white'
            }}>Request Your Invitation Now</Button>
        </Box>

        <Box alignSelf={'center'}>
            <Img src={logo} alt='tcn'/>
        </Box>
     </Flex>

     {/* About us */}
     <Flex id='about' justifyContent={'space-between'} alignItems={'center'}
     direction={['column-reverse', 'column-reverse', 'row', 'row']}>
        <Box>
        <Img src={logo} alt='tcn'/>
        </Box>

        <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      color={'white'}
      direction={'column'}
      w={['85%']}
      gap={5}
    >
      <Heading alignSelf={'flex-start'}
        fontSize="60px"
        fontWeight="bold"
        letterSpacing={3}
        fontStyle={'oblique'}
        textShadow={["0 -30px 5px rgba(255, 255, 255, 0.5)"]}
      >
        About TCN
      </Heading>

      <Text fontSize={'xl'}>
      Imagine TON, but it's like your secret club's handshake - TCN, or Total Closed Network, is like TON's cool cousin that keeps everything locked down tight. It's like a VIP lounge for your messages and transactions, where only the chosen few are invited to party. So, if TON is the open bar, TCN is the exclusive rooftop bar with a velvet rope – only the cool kids allowed!
      </Text>

      <Button alignSelf={'flex-start'}
      letterSpacing={1} borderRadius={'15px'} h={'7vh'}
      bgColor={'#c72727'} color={'white'}
      _hover={{
          color: 'white',
          bgColor: 'transparent',
          border: '2px solid white'
      }}>
        Follow $TCN
      </Button>
    </Flex>

     </Flex>

     {/* How to buy */}
     <Flex id='how' color={'white'} direction={'column'} justifyContent={'center'}>
        <Box alignSelf={'center'}>
        <Heading fontSize={'60px'} letterSpacing={2}>How To Buy</Heading>
        </Box>

        <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={5}>
        <Flex
      bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)" // Glassmorphism shadow effect
      backdropFilter="blur(4px)" // Blur effect for the background
      borderRadius="xl" // Rounded corners
      p={2} // Padding
      w={['100%', '100%', "70vw","70vw"]} // Card width
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={10}

    >
    
        <Box display={['none', 'none', 'block', 'block']} py={3} px={3} borderRadius={'10px'}  bgColor={'#0088ce'} h={'15vh'} w={'7vw'}>
            <Img src={ton} alt='ton keeper' w={20}/>
        </Box>

        <Flex direction={'column'}>
            <Heading fontSize={['18px', '18px', '40px', '40px']} letterSpacing={2}>CREATE A TON WALLET ON TON KEEPER</Heading>
            <Text>Head to Tonkeeper and follow the straightforward steps to create  your ton wallet, Granting you secure access to manage Ton and jettons effortlessly</Text>

        </Flex>
      
    </Flex>

    <Flex
      bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)" // Glassmorphism shadow effect
      backdropFilter="blur(4px)" // Blur effect for the background
      borderRadius="xl" // Rounded corners
      p={2} // Padding
      w={['100%', '100%', "70vw","70vw"]}// Card width
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={10}

    >
    
        <Box display={['none', 'none', 'block', 'block']} py={4} px={3} borderRadius={'10px'}  bgColor={'#0088ce'} h={'15vh'} w={'8vw'}>
            <Img src={ton} alt='ton keeper' w={20}/>
        </Box>

        <Flex direction={'column'}>
        <Heading fontSize={['18px', '18px', '40px', '40px']}  letterSpacing={2}>DEPOSIT TON INTO YOUR WALLET</Heading>
        <Text>Deposit TON into your newly created wallet to start your journey in the TON ecosystem. You can acquire TON through various exchanges or by participating in TON-based projects and initiatives.</Text>
      </Flex>
      
    </Flex>

    <Flex
      bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)" // Glassmorphism shadow effect
      backdropFilter="blur(4px)" // Blur effect for the background
      borderRadius="xl" // Rounded corners
      p={2} // Padding
      w={['100%', '100%', "70vw","70vw"]} // Card width
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={10}

    >
    
        <Box display={['none', 'none', 'block', 'block']} py={4} px={3} borderRadius={'10px'}  bgColor={'#0088ce'} h={'15vh'} w={'8vw'}>
            <Img src={ston} alt='ton keeper' w={20}/>
        </Box>

        <Flex direction={'column'}>
        <Heading fontSize={['18px', '18px', '40px', '40px']}  letterSpacing={2}> GO TO STON.FI</Heading>
        <Text>connect to Ston.fi. Go to Ston.fi in google chrome. Connect your wallet. Paste the $TCN token address into Ston.fi, select $TCN, and confirm. When Tonkeeper prompts you for a wallet signature, sign</Text>
      </Flex>
      
    </Flex>

    <Flex
      bg="rgba(255, 255, 255, 0.2)" // Semi-transparent background
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)" // Glassmorphism shadow effect
      backdropFilter="blur(4px)" // Blur effect for the background
      borderRadius="xl" // Rounded corners
      p={2} // Padding
      w={['100%', '100%', "70vw","70vw"]} // Card width
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={10}

    >
    
        <Box display={['none', 'none', 'block', 'block']} py={4} px={3} borderRadius={'10px'}  bgColor={'#0088ce'} h={'15vh'} w={'8vw'}>
            <Img src={ton} alt='ton keeper' w={20}/>
        </Box>

        <Flex direction={'column'}>
        <Heading fontSize={['18px', '18px', '40px', '40px']}  letterSpacing={2}> SWITCH TON FOR $TCN</Heading>
        <Text>switch TON for $TCN. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</Text>
      </Flex>

      
      
    </Flex>

    <Flex justifyContent={'space-between'} w={['100%', '100%', '30vw', '30vw']}>
        <Button  letterSpacing={1} borderRadius={'15px'} h={'7vh'}
      bgColor={'#c72727'} color={'white'}
      _hover={{
          color: 'white',
          bgColor: 'transparent',
          border: '2px solid white'
      }}>Buy on STON.FI</Button>
        <Button  letterSpacing={1} borderRadius={'15px'} h={'7vh'}
      bgColor={'#c72727'} color={'white'}
      _hover={{
          color: 'white',
          bgColor: 'transparent',
          border: '2px solid white'
      }}>GeckoTerminal</Button>
      </Flex>

        </Flex>
     </Flex>

    { /* Tokenomics */}
    <Flex id='tokenomics' 
    direction={['column', 'column', 'row', 'row']} justifyContent={'space-between'} alignItems={'center'} px={10}>
      <Flex direction={'column'}>
        <Heading letterSpacing={2} color={'white'} fontSize={'50px'}>TOKENOMICS</Heading>

        <Flex direction={'column'} gap={5} fontSize={'2xl'} color={'white'}> 
          <Text>Total Supply: 10.000.000 </Text>
          <Text>Presale : 45%</Text>
          <Text>LP : 45%</Text>
          <Text>CEX : 5%</Text>
          <Text>Community and Team : 5% </Text>
          <InputGroup>
          <Input w={['70vw', '70vw', '25vw', '25vw']}type='text' color="white" value={'contract address'} disabled />
          <InputRightElement>
          <Icon cursor="pointer" color={copied ? 'lightgreen' : 'white'}  as={copied ? CheckIcon : CopyIcon} boxSize={6} onClick={handleCopy} />
          </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>

      
      <Box alignSelf={'flex-start'} display={['none', 'none', 'block', 'block']}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </Box>

        <Box alignSelf={'center'} display={['block', 'block', 'none', 'none']}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </Box>
      
      
    </Flex>

   

    </Flex>

     {/* Footer */}
     <Flex background={'#006699'}  p={10} direction={'column'} color={'white'}  >
      <Flex direction={['column', 'column', 'row', 'row']} justifyContent={'space-between'} alignItems={'center'}>
      <Box>
        <Img src={logo} alt='tcn'/>
      </Box>

      <Flex direction='column' gap={6} alignContent={'flex-start'}>
        <Heading fontSize={'60px'} letterSpacing={2} color={'white'}>Contact </Heading>
        <Heading>SUPPORT@TCN.COM</Heading>
        <InputGroup>
          <Input w={['70vw', '70vw', '25vw', '25vw']} type='text' color="white" value={'contract address'} disabled />
          <InputRightElement>
          <Icon cursor="pointer" color={copied ? 'lightgreen' : 'white'}  as={copied ? CheckIcon : CopyIcon} boxSize={6} onClick={handleCopy} />
          </InputRightElement>
          </InputGroup>

          <Flex gap={10}>
            <Button letterSpacing={1} borderRadius={'15px'} h={'7vh'}
      bgColor={'#c72727'} color={'white'}
      _hover={{
          color: 'white',
          bgColor: 'transparent',
          border: '2px solid white'
      }}>TELEGRAM</Button>
            <Button letterSpacing={1} borderRadius={'15px'} h={'7vh'}
      bgColor={'#c72727'} color={'white'}
      _hover={{
          color: 'white',
          bgColor: 'transparent',
          border: '2px solid white'
      }}>TWITTER</Button>
          </Flex>
      </Flex>
      </Flex>

      <Box alignSelf={'center'}>
      <Text fontSize={['2xl']}>COPYRiGHT &copy; 2024 $TCN</Text>
      </Box>
      
</Flex>

    </>
  )
}

export default Home