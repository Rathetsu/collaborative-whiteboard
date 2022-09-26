import React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';



export const Canvas = (props) => {
	return (
		<ReactSketchCanvas
			style={styles.canvas}
			width={'100%'}
			height={'100%'}
			strokeColor={props.strokeColor}
			strokeWidth={props.strokeWidth}
			withTimestamp={true}
			onStroke={props.onStroke}
		/>
	)
}

const styles = {
	canvas: {
		border: '0.0625rem solid #9c9c9c',
		borderRadius: '0.25rem',
	}
};