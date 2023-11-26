import React from 'react';
import { useState } from 'react';
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';

const App = () => {
  const [keywords, setKeywords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function removeNonWords(str) {
    // Regular expression to match any characters that are not letters or space
    const regex = /[^\w\s]/g;

    // Replace all non-word characters with an empty string
    const wordsOnly = str.replace(regex, '');

    // Return the string with only words and space
    return wordsOnly;
  }


  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);
  
    const url = 'https://keyword-extraction6.p.rapidapi.com/';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY ,
        'X-RapidAPI-Host': import.meta.env.VITE_API_URL 
      },
      body: JSON.stringify({
        language: 'en',
        max_ngram_size: 1,
        deduplication_threshold: 0.2,
        deduplication_algo: 'seqm',
        number_of_keywords: 40,
        text: removeNonWords(text)
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const extractedValues = result.map(obj => obj['keyword'] + ', ');
      extractedValues[extractedValues.length - 1] = extractedValues[extractedValues.length - 1].replace(',', '');

      setKeywords(extractedValues);
      setLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Box bg='blue.600' width='100vw' color='white' height="100vh" paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />

      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export default App;
