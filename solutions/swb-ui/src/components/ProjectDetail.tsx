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

export default function EnvTypeCards(props: ProjectItemTypesProps): JSX.Element {

    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ sm: 0 }}>
                <Grid className={styles.gridCard} xs={12}>
                    <Card>
                        <CardContent >
                            <div className={styles.sessionTemplate}>
                                <div className={styles.firstS}>
                                    <div className={styles.imgCont}>
                                        <span>Select a session template</span>
                                    </div>
                                </div>
                                <div className={styles.secondS}>
                                    <div className={styles.secTabThird}>LAUNCH A SESSION</div>
                                    <div className={styles.secTabSecond}>Drag and drop files to launch a session</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className={styles.gridCard} xs={4}>
                    <Grid className={styles.gridCard} >
                        <Card>
                            <CardContent className={styles.sessionEdit}>
                                <div>
                                    <span className={styles.title}>SESSION TEMPLATES</span>
                                    <span className={styles.editSec}>Edit</span>
                                </div>
                                <div className={styles.sessTCard}>
                                    <div className={styles.firstTitle}>RStudio Copy</div>
                                    <div>Run RStudio Server</div>
                                    <div>4 CPU cores and 8GB RAM [12 hours] runtime</div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={styles.gridCard} >
                        <Card>
                            <CardContent className={styles.sessionEdit}>
                                <div>
                                    <span className={styles.title}>RECENT ACTIVITY</span>
                                    <span className={styles.editSec}>Edit</span>
                                </div>
                                <div className={styles.recentAct}>
                                    <div className={styles.title}>Job Status</div>
                                    <div>Failed <span>0</span></div>
                                    <div>Running <span>1</span></div>
                                    <div>Pending <span>5</span></div>
                                    <div>Complete<span>0</span></div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid className={styles.gridCard} xs={8}>
                    <Card className={styles.tabCard}>
                        <CardContent className={styles.sessionEdit}>
                            <div>
                                <span className={styles.title}>TABLES OF RESULTS</span>
                                <span className={styles.editSec}>View more</span>
                            </div>
                            <div className={styles.resultTab}>
                                <img className={styles.img} alt="Photo of sunset" src={'/results.png'}></img>
                                <div>Session results go here</div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>

    );
}
