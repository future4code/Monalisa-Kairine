import styled from "styled-components";


export const Form = styled.div`
	color: #3d405b;
    display: grid;
	width: 300px;
	margin: 50px auto;
    align-items: center;
    text-align: center;

    & button {
        border: none;
        border-radius: 3px;
        margin-top: 4px;
        background-color: #e5989b
    }

    & p {
        text-align: left;
    }
`;


export const Input = styled.input`
	padding: 0.5em;
	color: #3d405b;
    display: grid;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
    text-align: left;

    :focus{
        outline: none;
        border: 1px solid  #e5989b

    }
`;

