/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

// import { useCollection } from '@awsui/collection-hooks';
// import {
//   CollectionPreferences,
//   Cards,
//   Pagination,
//   Box,
//   TextFilter,
//   CardsProps,
//   TextContent
// } from '@awsui/components-react';
import { 
  CardsProps
} from '@awsui/components-react';
// import { useState } from 'react';
// import { TableEmptyDisplay } from '../common/tableEmptyState';
// import { TableNoMatchDisplay } from '../common/tableNoMatchState';

// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { ProjectItem } from '../models/Project';
import styles from '../styles/ProjectItemcard.module.scss';


interface OnSelectEnvTypeFunction {
  (selection: CardsProps.SelectionChangeDetail<ProjectItem>): void;
}
export interface ProjectItemTypesProps {
  onSelect: OnSelectEnvTypeFunction;
  allItems: ProjectItem[];
  selectedItem?: string;
  isLoading?: boolean;
}

// export const searchableColumns: string[] = ['name', 'description'];
export default function EnvTypeCards(props: ProjectItemTypesProps): JSX.Element {
  //   const [preferences, setPreferences] = useState({
  //     pageSize: 10
  //   });
  //   const itemType: string = 'Compute Platforms';
  //   const { items, filterProps, paginationProps } = useCollection(props.allItems, {
  //     filtering: {
  //       empty: TableEmptyDisplay(itemType),
  //       noMatch: TableNoMatchDisplay(itemType),
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       filteringFunction: (item: any, filteringText: string): any => {
  //         const filteringTextLowerCase = filteringText.toLowerCase();
  //         return searchableColumns.some(
  //           (key) =>
  //             // eslint-disable-next-line security/detect-object-injection
  //             typeof item[key] === 'string' && item[key].toLowerCase().indexOf(filteringTextLowerCase) > -1
  //         );
  //       }
  //     },
  //     pagination: { pageSize: preferences.pageSize }
  //   });

  //   const selected = props.allItems.filter((i) => i.id === props.selectedItem);
  //   const [selectedItems, setSelectedItems] = useState(selected);

  return (
    // <Cards
    //   loading={props.isLoading}
    //   loadingText="Loading Compute Platforms"
    //   onSelectionChange={({ detail }) => {
    //     setSelectedItems((prevState) => detail.selectedItems);
    //     props.onSelect(detail);
    //   }}
    //   selectedItems={selectedItems}
    //   cardDefinition={{
    //     header: (e) => e.name,
    //     sections: [
    //       {
    //         id: 'description',
    //         content: (e) => {
    //           return <TextContent>{e.description}</TextContent>;
    //         }
    //       }
    //     ]
    //   }}
    //   items={items}
    //   selectionType="single"
    //   trackBy="id"
    //   visibleSections={['description']}
    //   empty={
    //     <Box textAlign="center" color="inherit">
    //       <b>No {itemType}</b>
    //       <Box padding={{ bottom: 's' }} variant="p" color="inherit">
    //         No {itemType} to display.
    //       </Box>
    //     </Box>
    //   }
    //   filter={<TextFilter {...filterProps} filteringPlaceholder="Find Compute Platform" />}
    //   pagination={<Pagination {...paginationProps} />}
    //   preferences={
    //     <CollectionPreferences
    //       title="Preferences"
    //       confirmLabel="Confirm"
    //       cancelLabel="Cancel"
    //       preferences={preferences}
    //       onConfirm={({ detail: { pageSize } }) => setPreferences({ pageSize: pageSize || 10 })}
    //       pageSizePreference={{
    //         title: 'Page size',
    //         options: [
    //           { label: '10', value: 10 },
    //           { label: '15', value: 15 },
    //           { label: '20', value: 20 }
    //         ]
    //       }}
    //     />
    //   }
    // />

    // <Cards
    //   loading={props.isLoading}
    //   loadingText="Loading Compute Platforms"
    //   onSelectionChange={({ detail }) => {
    //     setSelectedItems((prevState) => detail.selectedItems);
    //     props.onSelect(detail);
    //   }}
    //   selectedItems={selectedItems}
    //   cardDefinition={{
    //     header: (e) => e.name,
    //     sections: [
    //       {
    //         id: 'description',
    //         content: (e) => {
    //           return <TextContent>{e.description}</TextContent>;
    //         }
    //       }
    //     ]
    //   }}
    //   items={items}
    //   selectionType="multi"
    //   trackBy="id"
    //   visibleSections={['description']}
    //   empty={
    //     <Box textAlign="center" color="inherit">
    //       <b>No {itemType}</b>
    //       <Box padding={{ bottom: 's' }} variant="p" color="inherit">
    //         No {itemType} to display.
    //       </Box>
    //     </Box>
    //   }
    //   filter={<TextFilter {...filterProps} filteringPlaceholder="Find Project" />}
    //   pagination={<Pagination {...paginationProps} />}
    //   preferences={
    //     <CollectionPreferences
    //       title="Preferences"
    //       confirmLabel="Confirm"
    //       cancelLabel="Cancel"
    //       preferences={preferences}
    //       onConfirm={({ detail: { pageSize } }) => setPreferences({ pageSize: pageSize || 10 })}
    //       pageSizePreference={{
    //         title: 'Page size',
    //         options: [
    //           { label: '10', value: 10 },
    //           { label: '15', value: 15 },
    //           { label: '20', value: 20 }
    //         ]
    //       }}
    //     />
    //   }
    // />
    // <Cards
    //   ariaLabels={{
    //       itemSelectionLabel: (e, t) => `select ${t.name}`,
    //       selectionGroupLabel: "Item selection"
    //   }}
    //   cardDefinition={{
    //       header: e => e.name,
    //       sections: [
    //       {
    //           id: "id",
    //           header: "Id",
    //           content: e => e.id
    //       },
    //       {
    //           id: "name",
    //           header: "Name",
    //           content: e => e.name
    //       },
    //       {
    //           id: "estimatedCost",
    //           header: "estimatedCost",
    //           content: e => e.estimatedCost
    //       },
    //       {
    //           id: "type",
    //           header: "Type1",
    //           content: e => e.type
    //       }
    //       ]
    //   }}
    //   cardsPerRow={[
    //       { cards: 1 },
    //       { minWidth: 500, cards: 2 }
    //   ]}
    //   items={[
    //       {
    //       id: "Item 1",
    //       name: <h1>Hello!</h1>,
    //       estimatedCost: 21,
    //       type: "S3"
    //       },
    //       {
    //       id: "Item 2",
    //       name: "Second",
    //       estimatedCost: 22,
    //       type: "Nextflow"
    //       },
    //       {
    //       id: "Item 3",
    //       name: "Third",
    //       estimatedCost: 23,
    //       type: "Cromwell"
    //       }
    //   ]}
    //   loadingText="Loading resources"
    //   trackBy="name"
    //   visibleSections={["description", "type", "size"]}
    // />
    // <Container>
    //   <Button variant="contained">Hello World</Button>
    // </Container> 
    <div>
      <Grid container rowSpacing={2} columnSpacing={{ sm: 0 }}>
      <Grid className={styles.gridCard} xs={6}>
        <Card className={styles.cardBox}>
          <CardContent className={styles.cardContainer}>
            <div className={styles.cardFirstSection}>
                <div className={styles.firstS}>
                  <div className={styles.imgCont}>
                    <img className={styles.img} alt="Photo of sunset" src={'/dna.png'}></img>
                  </div> 
                </div>
                <div className={styles.secondS}>
                  <div className={styles.secTabFirst}>Chiron</div>
                  <div className={styles.secTabSecond}>Principal Investigator </div>
                  <div className={styles.secTabThird}>Hewlett Hawking</div>
                </div>
                <div className={styles.thirdS}>
                <div className={styles.thirdTabFirstPause}>Paused</div>
                  <div className={styles.thirdTabSecond}>Project Budget</div>
                  <div className={styles.thirdTabThird}>$32.09</div>
                </div>
            </div>
            <div className={styles.cardSecondSection}>
                <span>
                This project uses remotely sensed data products and measurements for studying processes and phenomena related to atmospheric chemistry analysis and the models for it.
                </span>
            </div>
          </CardContent> 
        </Card>
      </Grid>
      <Grid className={styles.gridCard} xs={6}>
        <Card className={styles.cardBox}>
          <CardContent className={styles.cardContainer}>
            <div className={styles.cardFirstSection}>
                <div className={styles.firstS}>
                  <div className={styles.imgCont}>
                    <img className={styles.img} alt="Photo of sunset" src={'/dna-1.png'}></img>
                  </div> 
                </div>
                <div className={styles.secondS}>
                  <div className={styles.secTabFirst}>Omiron-Analysis</div>
                  <div className={styles.secTabSecond}>Principal Investigator </div>
                  <div className={styles.secTabThird}>Tim Cook</div>
                </div>
                <div className={styles.thirdS}>
                <div className={styles.thirdTabFirst}>Active</div>
                  <div className={styles.thirdTabSecond}>Project Budget</div>
                  <div className={styles.thirdTabThird}>$51.07</div>
                </div>
            </div>
            <div className={styles.cardSecondSection}>
                <span>
                Scientific Research use cases in health, environment, chemistry, space, food tech. This project showcases use cases for Research Gateway beyond Genomics using standard products like High Performance Computing, Analytics.
                </span>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={styles.gridCard} xs={6}>
        <Card className={styles.cardBox}>
          <CardContent className={styles.cardContainer}>
            <div className={styles.cardFirstSection}>
                <div className={styles.firstS}>
                  <div className={styles.imgCont}>
                    <img className={styles.img} alt="Photo of sunset" src={'/biotechnology.png'}></img>
                  </div> 
                </div>
                <div className={styles.secondS}>
                  <div className={styles.secTabFirst}>Evolution</div>
                  <div className={styles.secTabSecond}>Principal Investigator </div>
                  <div className={styles.secTabThird}>Robert</div>
                </div>
                <div className={styles.thirdS}>
                <div className={styles.thirdTabFirst}>Active</div>
                  <div className={styles.thirdTabSecond}>Project Budget</div>
                  <div className={styles.thirdTabThird}>$21.50</div>
                </div>
            </div>
            <div className={styles.cardSecondSection}>
                <span>
                Coronavirus Evolution, Cross-Species Transmission and Recombination
                </span>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={styles.gridCard} xs={6}>
        <Card className={styles.cardBox}>
          <CardContent className={styles.cardContainer}>
            <div className={styles.cardFirstSection}>
                <div className={styles.firstS}>
                  <div className={styles.imgCont}>
                    <img className={styles.img} alt="Photo of sunset" src={'/innovation.png'}></img>
                  </div> 
                </div>
                <div className={styles.secondS}>
                  <div className={styles.secTabFirst}>DNA-Analysis</div>
                  <div className={styles.secTabSecond}>Principal Investigator </div>
                  <div className={styles.secTabThird}>Johnson</div>
                </div>
                <div className={styles.thirdS}>
                <div className={styles.thirdTabFirstPause}>Paused</div>
                  <div className={styles.thirdTabSecond}>Project Budget</div>
                  <div className={styles.thirdTabThird}>$46.09</div>
                </div>
            </div>
            <div className={styles.cardSecondSection}>
                <span>
                Genomics analysis for human whole genome sequencing
                </span>
            </div>
          </CardContent>  
        </Card>
      </Grid>
      </Grid>

      <div className={styles.loadMoreSection}>
        <span>Load more</span>
      </div>
    </div>
    
  );
}
