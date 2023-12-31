import React from 'react';
import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
    ModalHeader
} from '@chakra-ui/react';


function KeywordsModal({ keywords, loading, isOpen, closeModal }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Keywords
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                    {/* alignItems="center" justifyContent="center" */}
                        {loading ? (
                            <CircularProgress isIndeterminate color="blue.300"></CircularProgress>
                        ) :
                            (
                                <Text>{keywords}</Text>
                            )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={closeModal}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default KeywordsModal;