/**
 * Exports the individual themed component for Material, Fluent and iOS themes.
 */
import styles from './Styles';
import styled from 'styled-components';
import Base from './Base';

const Fluent = styled(Base)([styles.fluent]);
const Material = styled(Base)([styles.material]);
const Apple = styled(Base)([styles.ios]);

export { Fluent, Material, Apple };
