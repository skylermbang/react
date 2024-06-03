3 ways for CSS 

1. separate CSS sheet 
2. in the component 
3. styled component  (many places use this )


background-color: ${(props) => props.bgColor};
Using props to send data to the component ,
you can use this to set different CSS


Extendable Component:
const Circle = styled(Box) to make the Circle Component inherit the Box's CSS
