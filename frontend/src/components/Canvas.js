import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';



export const Canvas = () => {
	return (
		<ReactSketchCanvas
			style={styles.canvas}
			width={'100%'}
			height={'100%'}
			strokeColor={'black'}
			strokeWidth={2}
		/>
	)
}

const styles = {
	canvas: {
		border: '0.0625rem solid #9c9c9c',
		borderRadius: '0.25rem',
	}
};