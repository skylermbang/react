3 ways for CSS 

1. separate CSS sheet   : lots DIV , not intuitive naming.
2. in the component     : need to write the css in one line very hard to read
3. styled component  (many places use this ) : easy to control the component, 

Able to send props to CSS : 
background-color: ${(props) => props.bgColor};
Using props to send data to the component ,
you can use this to set different CSS


Extendable Component:
const Circle = styled(Box) 
to make the Circle Component inherit the Box's CSS


You can use this for make all the component set attribute
const Input = styled.input.attrs({ required: true })`


you can <Btn as="p"> it will bring the same styled css but differnet tag. 


You can target the components in the styled component ,  
ex) in the Box component you can specify other component when its hover , etc..

Theme:
