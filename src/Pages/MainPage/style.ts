import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1``

export const Content = styled.div`
    border: 1px solid gray;
    margin-bottom: 20px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3vh;
`

export const Label = styled.label`
    height: 9vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 16px;
`
export const InputContainer = styled.div`
    border: 1px solid gray;
    border-radius: 20px;
    width: fit-content;
    padding: 5px;
`
export const Input = styled.input`
    border: none;
    margin: 0 10px;
    background-color: transparent;
    :focus{
        outline: none;
    }
`

export const Button = styled.button`
    align-self: center;
`

export const ResponseContainer = styled.div`
    width: 80%;
    height: 100%;
    overflow-y: auto;
    display: grid;
 
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  
    grid-auto-rows: auto;
  
    grid-gap: 1rem;
`

export const Card = styled.div`
    width: 200px;
    height: 150px;
    margin-bottom: 10px;
    padding: .5rem;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`
export const CardItem =styled.div`
    width: 100%;
    height: fit-content;
    padding: 5px 0;
`


