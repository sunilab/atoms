{/* 
    <Grid>
        <GridRow>
            <GridColumn></GridColumn>
            <GridColumn></GridColumn>
            <GridColumn></GridColumn>
        </GridRow>
    </Grid>

    <div class='wrapper'>
        <div>One<div>
        <div>Two<div>
        <div>Three<div>
        <div>Four<div>
        <div>Five<div>
    </div>

    .wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    
*/}
import Grid from './Grid';
import GridRow from './GridRow';
import GridColumn from './GridColumn';

/** @Component */
export { Grid, GridRow, GridColumn };