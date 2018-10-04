/**
 * Auto component renders the appropriate theme based on the logic defined in the ThemedComponent HOC.
 */
import styles from './Styles';
import themed from '../ThemedComponent';
import styled from 'styled-components';
import Base from './Base';

export default themed(styled(Base)`
    ${props => props.themes['firefox']([styles.ios])};
    ${props => props.themes['edge']([styles.fluent])};
    ${props => props.themes['chrome']([styles.material])};
    ${props => props.themes['safari']([styles.safari])};
`);