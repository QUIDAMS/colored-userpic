import React from 'react';

const ColoredUserpic = ({ 
	src, backgroundColor, size, margin, colors, hoverColors, colorWidth,
}) => {
	return (
		<div
			style={{ 
				"--width": `${size}px`, 
				"--height": `${size}px`, 
				"--margin": `${margin}px`, 
				padding: colorWidth,
				borderSize: colorWidth,
				"--background-color": backgroundColor,
				"--first-color": colors[0], 
				"--second-color": colors[1], 
				"--first-hover-color": hoverColors[0], 
				"--second-hover-color": hoverColors[1], 
			}}
			className='userpic'
		>
			<img src={src} alt="avatar" />
		</div>
	)
}

export default ColoredUserpic;