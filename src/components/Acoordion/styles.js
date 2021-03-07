import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 480px;
    margin: auto;

    .accordion{
        width: 100%;
        max-width: 540px;
        margin: 18px auto;
        color: #fff;
    }

    .accordionHeading{
        background: #3f475d;
        padding: 14px 0;

    }

    .accordionHeading .container{
        display: flex;
        align-items: center;
        padding: 0px 24px;
        justify-content: space-between;
    }

    .accordionHeading p{
        letter-spacing: 1.2px;
        font-weight: 600;

    }

    .accordionHeading span{
        cursor: pointer;
    }
    .accordionContent{
        background: #38307f;
        height: 0;
        opacity: 0;
        display: flex;
        overflow: hidden;
        transition: all 600ms ease-in-out;
    }

    .accordionContent.show{
        height: 180px;
        border: 1px solid red;

    } 

    .container.int{
        padding:24px;
        background: #38307f;
    }
    .accordionContent p{
        font-size: 15px;
        line-height: 1.6;
    }
`;