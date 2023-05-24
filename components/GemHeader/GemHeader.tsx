import React, { useState, useEffect } from 'react';
import ModalHeaderContent from './ModalHeaderContent';
import { Container, Modal, Button } from '@nextui-org/react';
import AnimatedHeader from './AnimatedHeader';
import DamagedHeader from './DamagedHeader';

const GemHeader = () => {
	const [visible, setVisible] = useState(false);
	const [meMori, setMeMori] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [count, setCount] = useState(0);

	const closeModal = () => setModalOpen(false);
	const handleVisible = () => {
		console.log('clic');
		toggleVisible();
		window.setTimeout(toggleVisible, 1500);
		setCount((prevCount) => prevCount + 1);
	};
	const toggleVisible = () => setVisible((prevVisible) => !prevVisible);

	useEffect(() => {
		if (count === 4) {
			setMeMori(true);
			setModalOpen(true);
		}
	}, [count]);

	return (
		<Container>
			{meMori ? (
				<DamagedHeader />
			) : (
				<AnimatedHeader visible={visible} onClick={handleVisible} />
			)}

			<Modal
				closeButton
				aria-labelledby="OOPS"
				open={modalOpen}
				onClose={closeModal}
				blur
				autoMargin
			>
				<Modal.Body>
					<ModalHeaderContent />
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="secondary" onPress={closeModal}>
						oops?
					</Button>
					<Button auto onPress={closeModal}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>

			<style jsx>
				{`
					.container {
						margin: 2rem 0 3rem;
					}
					.container :global(.header) {
						display: flex;
						align-items: center;
						justify-content: center;
					}
				`}
			</style>
		</Container>
	);
};

export default GemHeader;
