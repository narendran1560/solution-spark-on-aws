/* eslint-disable @next/next/no-img-element */
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
    Button, CardsProps, Container, Box, Form, Header, SpaceBetween, ButtonDropdown, Link, Table, TextFilter, Pagination, CollectionPreferences, DateRangePicker
} from '@awsui/components-react';
// import { useState } from 'react';
// import { TableEmptyDisplay } from '../common/tableEmptyState';
// import { TableNoMatchDisplay } from '../common/tableNoMatchState';

// import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import PaidIcon from '@mui/icons-material/Paid';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import SyncIcon from '@mui/icons-material/Sync';
import { Divider } from '@mui/material';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../models/Project';
import styles from '../styles/ProjectItemcard.module.scss';

interface OnSelectEnvTypeFunction {
    (selection: CardsProps.SelectionChangeDetail<ProjectItem>): void;
}
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export interface ProjectItemTypesProps {
    onSelect: OnSelectEnvTypeFunction;
    allItems: ProjectItem[];
    selectedItem?: string;
    isLoading?: boolean;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function EnvTypeCards(): JSX.Element {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const [
        selectedItems,
        setSelectedItems
    ] = React.useState([{ name: "Item 2" }]);

    return (
        <div>
            <Grid container rowSpacing={2} columnSpacing={{ sm: 0 }}>
                <Grid className={styles.gridCard} xs={4}>
                    <Card className={styles.cardFirstBox}>
                        <CardContent >
                            <div className={styles.sessionBudgetCardFirst}>
                                <div className={styles.firstS}>
                                    <div className={styles.secTabThird}>9</div>
                                    <div className={styles.secTabSecond}>Total Active Sessions</div>
                                </div>
                                <div className={styles.secondS}>
                                    <img className={styles.img} alt="Photo of sunset" src={'https://rpqa-np.rlcatalyst.com/assets/images/available_budget.png'}></img>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className={styles.gridCard} xs={4}>
                    <Card className={styles.cardSecondBox}>
                        <CardContent >
                            <div className={styles.sessionBudgetCardFirst}>
                                <div className={styles.firstS}>
                                    <div className={styles.secTabThird}>3</div>
                                    <div className={styles.secTabSecond}>Total Running Sessions</div>
                                </div>
                                <div className={styles.secondS}>
                                    <img className={styles.img} alt="Photo of sunset" src={'https://rpqa-np.rlcatalyst.com/assets/images/consumed_budget.png'}></img>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid className={styles.gridCard} xs={4}>
                    <Card className={styles.cardThirdBox}>
                        <CardContent >
                            <div className={styles.sessionBudgetCardFirst}>
                                <div className={styles.firstS}>
                                    <div className={styles.secTabThird}>10</div>
                                    <div className={styles.secTabSecond}>Total Users</div>
                                </div>
                                <div className={styles.secondS}>
                                    <img className={styles.img} alt="Photo of sunset" src={'https://rpqa-np.rlcatalyst.com/assets/images/consumed_project_budget.png'}></img>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Form
                header={
                    <>
                        <Header
                            actions={
                                <Box float="right">
                                    <SpaceBetween direction="horizontal" size="xs">
                                        {/* <Button>
                                            <PauseIcon className={styles.projectAction} />
                                            Pause
                                        </Button>
                                        <Button>
                                            <StopIcon className={styles.projectAction} />
                                            Stop
                                        </Button>
                                        <Button>
                                            <SyncIcon className={styles.projectAction} />
                                            Sync
                                        </Button> */}
                                        <Button iconName="add-plus">
                                            Add Researcher
                                        </Button>
                                        <Button>
                                            <PaidIcon className={styles.projectAction} />
                                            Add Budget
                                        </Button>
                                        <Button>
                                            <DeleteIcon className={styles.projectAction} />
                                            Archive
                                        </Button>
                                        <ButtonDropdown
                                            items={[
                                                { text: "Pause", id: "rm", disabled: false },
                                                { text: "Stop", id: "mv", disabled: false },
                                                { text: "Sync", id: "rn", disabled: false }
                                            ]}
                                        >
                                            Actions
                                        </ButtonDropdown>
                                    </SpaceBetween>
                                </Box>
                            }
                        >
                            Project Details
                        </Header>
                    </>
                }
            >

            </Form>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Box className={styles.tabBoxDiv} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="Project details dashboard">
                            <Tab className={styles.tabBox} label="Project Details" />
                            <Divider
                                orientation="vertical"
                                style={{ height: 30, alignSelf: "center", backgroundColor: "#aab7b8" }}
                            />
                            <Tab className={styles.tabBox} label="Sessions" />
                            <Divider
                                orientation="vertical"
                                style={{ height: 30, alignSelf: "center", backgroundColor: "#aab7b8" }}
                            />
                            <Tab className={styles.tabBox} label="Templates" />
                            <Divider
                                orientation="vertical"
                                style={{ height: 30, alignSelf: "center", backgroundColor: "#aab7b8" }}
                            />
                            <Tab className={styles.tabBox} label="Files" />
                            <Divider
                                orientation="vertical"
                                style={{ height: 30, alignSelf: "center", backgroundColor: "#aab7b8" }}
                            />
                            <Tab className={styles.tabBox} label="User Activity" />
                        </Tabs>
                    </Box>
                    <TabPanel className={styles.tabPanelBox} value={value} index={0}>
                        <div className={styles.projectDetTab}>
                            <div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Project Name</div>
                                    <div className={styles.proValue}>Evolution</div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Project Description</div>
                                    <div className={styles.proValue}>Coronavirus Evolution, Cross-Species Transmission and Recombination</div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Account ID</div>
                                    <div className={styles.proValue}>Evolution</div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Created On</div>
                                    <div className={styles.proValue}>Jul 1, 2021
                                    </div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Project Owner
                                    </div>
                                    <div className={styles.proValue}>principala</div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Assigned Researchers</div>
                                    <div className={styles.proValue}>Researcher A, kiran kumar ballari, researcher, Yoohoon Won, Puneet Chaddha

                                    </div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Add Products </div>
                                    <div className={styles.proValue}>Standard catalog</div>
                                </div>
                                <div className={styles.proLabelHead}>
                                    <div className={styles.proLabel}>Budget</div>
                                    <div className={styles.proValue}>USD 3000 ( 51 % used )</div>
                                </div>
                            </div>
                            <div className={styles.displayNone}>
                                <Card>
                                    <CardContent>
                                        <div className={styles.proActHead}>ACTIONS</div>
                                        <div className={styles.proActButton}>
                                            <div className={styles.custBtn}>
                                                <PauseIcon className={styles.icon} />
                                                <span>Pause</span>
                                            </div>
                                            <div className={styles.custBtn}>
                                                <StopIcon className={styles.icon} />
                                                <span>Stop</span>
                                            </div>
                                            <div className={styles.custBtn}>
                                                <SyncIcon className={styles.icon} />
                                                <span>Sync</span>
                                            </div>
                                            <div className={styles.custBtn}>
                                                <PaidIcon className={styles.icon} />
                                                <span>Add Budget</span>
                                            </div>
                                            <div className={styles.custBtn}>
                                                <DeleteIcon className={styles.icon} />
                                                <span>Archive</span>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={styles.tabPanelBox} value={value} index={1}>
                        Events
                    </TabPanel>
                    <TabPanel className={styles.tabPanelBox} value={value} index={2}>
                        <Box>
                            <h3>Active Templates (2)</h3>
                            <div>
                                <Grid container rowSpacing={2} columnSpacing={{ sm: 0 }}>
                                    <Grid className={styles.gridCard} xs={4}>
                                        <Card className={styles.cardBox}>
                                            <CardContent className={styles.cardContainerTem}>
                                                <div className={styles.cardTemplateFirst}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.secTabThird}>$ 42.07 used</div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.thirdTabFirstPause}>Stopped</div>
                                                    </div>
                                                </div>
                                                <div className={styles.cardTemplateSec}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.imgCont}>
                                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/sagemaker.png'}></img>
                                                        </div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.secTabFirst}>Cancer Analysis</div>
                                                        <div className={styles.secTabThird}>Amazon Sagemaker</div>
                                                    </div>
                                                </div>
                                                <div className={styles.cardTime}>
                                                    <div>
                                                        <div>Last update 2 months ago</div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid className={styles.gridCard} xs={4}>
                                        <Card className={styles.cardBox}>
                                            <CardContent className={styles.cardContainerTem}>
                                                <div className={styles.cardTemplateFirst}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.secTabThird}>$ 16.05 used</div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.thirdTabFirstPause}>Active</div>
                                                    </div>
                                                </div>
                                                <div className={styles.cardTemplateSec}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.imgCont}>
                                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/Parallel-Cluster@5x.png'}></img>
                                                        </div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.secTabFirst}>PCluster-High Performance Computing</div>
                                                        <div className={styles.secTabThird}>Amazon ParallelCluster</div>
                                                    </div>
                                                </div>
                                                <div className={styles.cardTime}>
                                                    <div>
                                                        <div>Last update 2 months ago</div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Files
                    </TabPanel>
                    <TabPanel className={styles.tabPanelBox} value={value} index={4}>
                        <Box>
                            <h3>Templates (4)</h3>
                            <div>
                                <Grid container rowSpacing={2} columnSpacing={{ sm: 0 }}>
                                    <Grid className={styles.gridCard} xs={4}>
                                        <Card className={styles.cardBox}>
                                            <CardContent className={styles.cardContainerTemAv}>
                                                <div className={styles.cardTemplateSec}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.imgCont}>
                                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/sagemaker.png'}></img>
                                                        </div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.secTabThird}>Amazon Sagemaker</div>
                                                        <Link
                                                            external
                                                            externalIconAriaLabel="Opens in a new tab"
                                                            href="https://example.com/"
                                                        >
                                                            Know more
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className={styles.cardSecondSection}>
                                                    <span>
                                                        Amazon SageMaker is a fully managed service that provides the ability to build, train, and deploy ML models.
                                                    </span>
                                                    <div className={styles.proLaun}>
                                                        <Button >
                                                            Launch
                                                        </Button>
                                                    </div>

                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid className={styles.gridCard} xs={4}>
                                        <Card className={styles.cardBox}>
                                            <CardContent className={styles.cardContainerTemAv}>
                                                <div className={styles.cardTemplateSec}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.imgCont}>
                                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/aws.png'}></img>
                                                        </div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.secTabThird}>RStudio</div>
                                                        <Link
                                                            external
                                                            externalIconAriaLabel="Opens in a new tab"
                                                            href="https://example.com/"
                                                        >
                                                            Know more
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className={styles.cardSecondSection}>
                                                    <span>
                                                        RStudio is an integrated development environment (IDE) for R. It includes a console, syntax-highlighting editor.
                                                    </span>
                                                    <div className={styles.proLaun}>
                                                        <Button >
                                                            Launch
                                                        </Button>
                                                    </div>

                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid className={styles.gridCard} xs={4}>
                                        <Card className={styles.cardBox}>
                                            <CardContent className={styles.cardContainerTemAv}>
                                                <div className={styles.cardTemplateSec}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.imgCont}>
                                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/aws.png'}></img>
                                                        </div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.secTabThird}>Stata</div>
                                                        <Link
                                                            external
                                                            externalIconAriaLabel="Opens in a new tab"
                                                            href="https://example.com/"
                                                        >
                                                            Know more
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className={styles.cardSecondSection}>
                                                    <span>
                                                        Stata is a complete, integrated statistical software package that provides everything you need for data manipulation...
                                                    </span>
                                                    <div className={styles.proLaun}>
                                                        <Button >
                                                            Launch
                                                        </Button>
                                                    </div>

                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid className={styles.gridCard} xs={4}>
                                        <Card className={styles.cardBox}>
                                            <CardContent className={styles.cardContainerTemAv}>
                                                <div className={styles.cardTemplateSec}>
                                                    <div className={styles.firstS}>
                                                        <div className={styles.imgCont}>
                                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/aws.png'}></img>
                                                        </div>
                                                    </div>
                                                    <div className={styles.secondS}>
                                                        <div className={styles.secTabThird}>Spyder IDE</div>
                                                        <Link
                                                            external
                                                            externalIconAriaLabel="Opens in a new tab"
                                                            href="https://example.com/"
                                                        >
                                                            Know more
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className={styles.cardSecondSection}>
                                                    <span>
                                                        Spyder is a free and open source scientific environment written in Python, for Python, and designed by and for scientists, engineers and data analysts.
                                                    </span>
                                                    <div className={styles.proLaun}>
                                                        <Button >
                                                            Launch
                                                        </Button>
                                                    </div>

                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Files
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <Box>

                            <div className={styles.filesSection}>
                                <div className={styles.cardTemplateSec}>
                                    <div className={styles.firstS}>
                                        <div className={styles.imgCont}>
                                            <img className={styles.img} alt="Photo of sunset" src={'https://research.rlcatalyst.com/assets/images/aws_icon/s3.png'}></img>
                                        </div>
                                    </div>
                                    <div className={styles.secondS}>
                                        <div className={styles.secTabThird}>Phoenix-Storage-1662720287381
                                        </div>
                                        <Link
                                        >
                                            Amazon S3
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <Table
                                onSelectionChange={({ detail }) =>
                                    setSelectedItems(detail.selectedItems)
                                }
                                selectedItems={selectedItems}
                                ariaLabels={{
                                    selectionGroupLabel: "Items selection",
                                    allItemsSelectionLabel: ({ selectedItems }) =>
                                        `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
                                        } selected`,
                                    itemSelectionLabel: ({ selectedItems }, item) => {
                                        const isItemSelected = selectedItems.filter(
                                            i => i.name === item.name
                                        ).length;
                                        return `${item.name} is ${isItemSelected ? "" : "not"
                                            } selected`;
                                    }
                                }}
                                columnDefinitions={[
                                    {
                                        id: "variable",
                                        header: "File name",
                                        cell: e => e.name,
                                        sortingField: "name"
                                    },
                                    {
                                        id: "value",
                                        header: "Size",
                                        cell: e => e.alt,
                                        sortingField: "alt"
                                    },
                                    { id: "type", header: "Type", cell: e => e.type },
                                    {
                                        id: "description",
                                        header: "Last updated on",
                                        cell: e => e.description
                                    }
                                ]}
                                items={[
                                    {
                                        name: " Sample Screens CloudJump Designed...	",
                                        alt: "34.1 KB",
                                        description: "February 16, 2022, 14:13:59 (UTC+05:30)",
                                        type: "Yaml",
                                        size: "34.1 KB"
                                    },
                                    {
                                        name: "Data and Files",
                                        alt: "-",
                                        description: "October 26, 2021, 12:28:02 (UTC+05:30)",
                                        type: "Folder",
                                        size: "-"
                                    },
                                    {
                                        name: "Outputs",
                                        alt: "-",
                                        description: "May 13, 2022, 11:21:19 (UTC+05:30)",
                                        type: "Folder",
                                        size: "-"
                                    },
                                    {
                                        name: "Scripts",
                                        alt: "-",
                                        description: "June 3, 2022, 17:55:53 (UTC+05:30)",
                                        type: "Folder",
                                        size: "-"
                                    },
                                    {
                                        name: "Logs",
                                        alt: "-",
                                        description:
                                            "October 5, 2021, 18:15:55 (UTC+05:30)",
                                        type: "Folder",
                                        size: "-"
                                    }
                                ]}
                                loadingText="Loading resources"
                                selectionType="multi"
                                trackBy="name"
                                visibleColumns={[
                                    "variable",
                                    "value",
                                    "type",
                                    "description"
                                ]}
                                empty={
                                    <Box textAlign="center" color="inherit">
                                        <b>No resources</b>
                                        <Box
                                            padding={{ bottom: "s" }}
                                            variant="p"
                                            color="inherit"
                                        >
                                            No resources to display.
                                        </Box>
                                        <Button>Create resource</Button>
                                    </Box>
                                }
                                filter={
                                    <TextFilter
                                        filteringPlaceholder="Find resources"
                                        filteringText=""
                                    />
                                }
                                header={
                                    <Header
                                        actions={
                                            <Box float="right">
                                                <SpaceBetween direction="horizontal" size="xs">
                                                    <Button
                                                        disabled={false}
                                                    >
                                                        Create Folder
                                                    </Button>

                                                    <ButtonDropdown
                                                        items={[
                                                            { text: "Copy", id: "rm", disabled: false },
                                                            { text: "Download", id: "mv", disabled: false },
                                                            { text: "Delete", id: "rn", disabled: false }
                                                        ]}
                                                    >
                                                        Actions
                                                    </ButtonDropdown>
                                                    <Button variant="primary" href="/environments/new">
                                                        Upload
                                                    </Button>
                                                </SpaceBetween>
                                            </Box>
                                        }
                                    >
                                        Object (4)
                                    </Header>
                                }
                                pagination={
                                    <Pagination
                                        currentPageIndex={1}
                                        pagesCount={2}
                                        ariaLabels={{
                                            nextPageLabel: "Next page",
                                            previousPageLabel: "Previous page",
                                            pageLabel: pageNumber =>
                                                `Page ${pageNumber} of all pages`
                                        }}
                                    />
                                }
                                preferences={
                                    <CollectionPreferences
                                        title="Preferences"
                                        confirmLabel="Confirm"
                                        cancelLabel="Cancel"
                                        preferences={{
                                            pageSize: 10,
                                            visibleContent: [
                                                "variable",
                                                "value",
                                                "type",
                                                "description"
                                            ]
                                        }}
                                        pageSizePreference={{
                                            title: "Select page size",
                                            options: [
                                                { value: 10, label: "10 resources" },
                                                { value: 20, label: "20 resources" }
                                            ]
                                        }}
                                        visibleContentPreference={{
                                            title: "Select visible content",
                                            options: [
                                                {
                                                    label: "Main distribution properties",
                                                    options: [
                                                        {
                                                            id: "variable",
                                                            label: "Variable name",
                                                            editable: false
                                                        },
                                                        { id: "value", label: "Text value" },
                                                        { id: "type", label: "Type" },
                                                        {
                                                            id: "description",
                                                            label: "Description"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }}
                                    />
                                }
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        User Activity
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                        <Box className={styles.userActBox}>
                            <Table
                                onSelectionChange={({ detail }) =>
                                    setSelectedItems(detail.selectedItems)
                                }
                                selectedItems={selectedItems}
                                ariaLabels={{
                                    selectionGroupLabel: "Items selection",
                                    allItemsSelectionLabel: ({ selectedItems }) =>
                                        `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
                                        } selected`,
                                    itemSelectionLabel: ({ selectedItems }, item) => {
                                        const isItemSelected = selectedItems.filter(
                                            i => i.user === item.user
                                        ).length;
                                        return `${item.user} is ${isItemSelected ? "" : "not"
                                            } selected`;
                                    }
                                }}
                                columnDefinitions={[
                                    {
                                        id: "user",
                                        header: "User",
                                        cell: e => e.user,
                                        sortingField: "user"
                                    },
                                    {
                                        id: "logical",
                                        header: "Logical Id",
                                        cell: e => e.logical,
                                        sortingField: "logical"
                                    },
                                    {
                                        id: "timestamp",
                                        header: "Time Stamp",
                                        cell: e => e.timestamp
                                    },
                                    {
                                        id: "status",
                                        header: "Status",
                                        cell: e => e.status
                                    },
                                    {
                                        id: "statusreason",
                                        header: "Status Reason",
                                        cell: e => e.statusreason
                                    }
                                ]}
                                items={[
                                    {
                                        user: "Principal A",
                                        logical: "AUTHENTICATION",
                                        timestamp: "September 16, 2022, 2:47:07 (UTC+05:30)",
                                        status: "LOGIN_SUCCESSFUL",
                                        statusreason: "Login successful for user principala@relevancelab.com, unique session token 5661e890-35a0-11ed-aa1a-a5dfc4d2a723"
                                    },
                                    {
                                        user: "Principal A",
                                        logical: "COST_CONTROL",
                                        timestamp: "October 26, 2021, 12:28:02 (UTC+05:30)",
                                        status: "PROJECT_STOPPED",
                                        statusreason: "The project DNA-Analysis with id 630c57e8623db700a9374e76 was stopped by principala@relevancelab.com"
                                    },
                                    {
                                        user: "SYSTEM",
                                        logical: "CATALOG",
                                        timestamp: "May 13, 2022, 11:21:19 (UTC+05:30)",
                                        status: "PRODUCT_DETAILS_SYNC_COMPLETED",
                                        statusreason: "Sync completed by user SYSTEM for account jonathan-goeke-nus. 3 products found"
                                    },
                                    {
                                        user: "Khoo Yueh Leng 0	",
                                        logical: "AUTHENTICATION",
                                        timestamp: "June 3, 2022, 17:55:53 (UTC+05:30)",
                                        status: "LOGOUT_SUCCESSFUL",
                                        statusreason: "Logout successful for user e0425297@u.nus.edu, unique session token 5a35d720-35a4-11ed-aa1a-a5dfc4d2a723"
                                    },
                                    {
                                        user: "SYSTEM",
                                        logical: "SECURITY_GROUP",
                                        timestamp:
                                            "October 5, 2021, 18:15:55 (UTC+05:30)",
                                        status: "SECURITY_GROUP_SYNC_STARTED",
                                        statusreason: "Security Groups sync started by user SYSTEM"
                                    }
                                ]}
                                loadingText="Loading resources"
                                selectionType="multi"
                                trackBy="user"
                                visibleColumns={[
                                    "user",
                                    "logical",
                                    "timestamp",
                                    "status",
                                    "statusreason"
                                ]}
                                empty={
                                    <Box textAlign="center" color="inherit">
                                        <b>No resources</b>
                                        <Box
                                            padding={{ bottom: "s" }}
                                            variant="p"
                                            color="inherit"
                                        >
                                            No resources to display.
                                        </Box>
                                        <Button>Create resource</Button>
                                    </Box>
                                }
                                filter={
                                    <SpaceBetween direction="vertical" size="xs">
                                        <TextFilter
                                        filteringPlaceholder="Search"
                                        filteringText=""
                                    />
                                    <DateRangePicker
                                        onChange={({ detail }) => setValue(detail.value)}
                                        value={value}
                                        relativeOptions={[
                                            {
                                                key: "previous-5-minutes",
                                                amount: 5,
                                                unit: "minute",
                                                type: "relative"
                                            },
                                            {
                                                key: "previous-30-minutes",
                                                amount: 30,
                                                unit: "minute",
                                                type: "relative"
                                            },
                                            {
                                                key: "previous-1-hour",
                                                amount: 1,
                                                unit: "hour",
                                                type: "relative"
                                            },
                                            {
                                                key: "previous-6-hours",
                                                amount: 6,
                                                unit: "hour",
                                                type: "relative"
                                            }
                                        ]}
                                        i18nStrings={{
                                            todayAriaLabel: "Today",
                                            nextMonthAriaLabel: "Next month",
                                            previousMonthAriaLabel: "Previous month",
                                            customRelativeRangeDurationLabel: "Duration",
                                            customRelativeRangeDurationPlaceholder:
                                                "Enter duration",
                                            customRelativeRangeOptionLabel: "Custom range",
                                            customRelativeRangeOptionDescription:
                                                "Set a custom range in the past",
                                            customRelativeRangeUnitLabel: "Unit of time",
                                            formatRelativeRange: e => {
                                                const t =
                                                    1 === e.amount ? e.unit : `${e.unit}s`;
                                                return `Last ${e.amount} ${t}`;
                                            },
                                            formatUnit: (e, t) => (1 === t ? e : `${e}s`),
                                            dateTimeConstraintText:
                                                "Range must be between 6 and 30 days. Use 24 hour format.",
                                            relativeModeTitle: "Relative range",
                                            absoluteModeTitle: "Absolute range",
                                            relativeRangeSelectionHeading: "Choose a range",
                                            startDateLabel: "Start date",
                                            endDateLabel: "End date",
                                            startTimeLabel: "Start time",
                                            endTimeLabel: "End time",
                                            clearButtonLabel: "Clear and dismiss",
                                            cancelButtonLabel: "Cancel",
                                            applyButtonLabel: "Apply"
                                        }}
                                        placeholder="Filter by a date and time range"
                                    />
                                    </SpaceBetween>
                                    
                                }
                                header={
                                    <Header
                                        actions={
                                            <Box float="right">
                                                <SpaceBetween direction="horizontal" size="xs">
                                                    <Button iconName="refresh" variant="primary">Refresh</Button>
                                                </SpaceBetween>
                                            </Box>
                                        }
                                    >
                                        User Activity
                                    </Header>
                                }
                                pagination={
                                    <Pagination
                                        currentPageIndex={1}
                                        pagesCount={2}
                                        ariaLabels={{
                                            nextPageLabel: "Next page",
                                            previousPageLabel: "Previous page",
                                            pageLabel: pageNumber =>
                                                `Page ${pageNumber} of all pages`
                                        }}
                                    />
                                }
                                preferences={
                                    <CollectionPreferences
                                        title="Preferences"
                                        confirmLabel="Confirm"
                                        cancelLabel="Cancel"
                                        preferences={{
                                            pageSize: 10,
                                            visibleContent: [
                                                "variable",
                                                "value",
                                                "type",
                                                "description"
                                            ]
                                        }}
                                        pageSizePreference={{
                                            title: "Select page size",
                                            options: [
                                                { value: 10, label: "10 resources" },
                                                { value: 20, label: "20 resources" }
                                            ]
                                        }}
                                        visibleContentPreference={{
                                            title: "Select visible content",
                                            options: [
                                                {
                                                    label: "Main distribution properties",
                                                    options: [
                                                        {
                                                            id: "variable",
                                                            label: "Variable name",
                                                            editable: false
                                                        },
                                                        { id: "value", label: "Text value" },
                                                        { id: "type", label: "Type" },
                                                        {
                                                            id: "description",
                                                            label: "Description"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }}
                                    />
                                }
                            />
                        </Box>
                        <Box className={styles.userActBox}>
                            <Table
                                onSelectionChange={({ detail }) =>
                                    setSelectedItems(detail.selectedItems)
                                }
                                selectedItems={selectedItems}
                                ariaLabels={{
                                    selectionGroupLabel: "Items selection",
                                    allItemsSelectionLabel: ({ selectedItems }) =>
                                        `${selectedItems.length} ${selectedItems.length === 1 ? "item" : "items"
                                        } selected`,
                                    itemSelectionLabel: ({ selectedItems }, item) => {
                                        const isItemSelected = selectedItems.filter(
                                            i => i.user === item.user
                                        ).length;
                                        return `${item.user} is ${isItemSelected ? "" : "not"
                                            } selected`;
                                    }
                                }}
                                columnDefinitions={[
                                    {
                                        id: "user",
                                        header: "User",
                                        cell: e => e.user,
                                        sortingField: "user"
                                    },
                                    {
                                        id: "logical",
                                        header: "Logical Id",
                                        cell: e => e.logical,
                                        sortingField: "logical"
                                    },
                                    {
                                        id: "timestamp",
                                        header: "Time Stamp",
                                        cell: e => e.timestamp
                                    },
                                    {
                                        id: "status",
                                        header: "Status",
                                        cell: e => e.status
                                    },
                                    {
                                        id: "statusreason",
                                        header: "Status Reason",
                                        cell: e => e.statusreason
                                    }
                                ]}
                                items={[
                                    {
                                        user: "SYSTEM",
                                        logical: "PostProvisioing",
                                        timestamp: "September 16, 2022, 2:47:07 (UTC+05:30)",
                                        status: "CREATE_COMPLETE",
                                        statusreason: "Post provisioning completed by Cloud Jump"
                                    },
                                    {
                                        user: "SYSTEM",
                                        logical: "PostProvisioing",
                                        timestamp: "October 26, 2021, 12:28:02 (UTC+05:30)",
                                        status: "CREATE_IN_PROGRESS",
                                        statusreason: "Post provisioning started by Cloud Jump"
                                    },
                                    {
                                        user: "SYSTEM",
                                        logical: "AWS::EC2::Instance",
                                        timestamp: "May 13, 2022, 11:21:19 (UTC+05:30)",
                                        status: "CREATE_IN_PROGRESS",
                                        statusreason: "Received SUCCESS signal with UniqueId i-0e7f940646c9c4824"
                                    },
                                    {
                                        user: "SYSTEM",
                                        logical: "AWS::EC2::Instance",
                                        timestamp: "June 3, 2022, 17:55:53 (UTC+05:30)",
                                        status: "CREATE_IN_PROGRESS",
                                        statusreason: "Resource creation Initiated"
                                    },
                                    {
                                        user: "SYSTEM",
                                        logical: "AWS::Batch::JobQueue",
                                        timestamp:
                                            "October 5, 2021, 18:15:55 (UTC+05:30)",
                                        status: "CREATE_IN_PROGRESS",
                                        statusreason: "Resource creation Initiated"
                                    }
                                ]}
                                loadingText="Loading resources"
                                selectionType="multi"
                                trackBy="user"
                                visibleColumns={[
                                    "user",
                                    "logical",
                                    "timestamp",
                                    "status",
                                    "statusreason"
                                ]}
                                empty={
                                    <Box textAlign="center" color="inherit">
                                        <b>No resources</b>
                                        <Box
                                            padding={{ bottom: "s" }}
                                            variant="p"
                                            color="inherit"
                                        >
                                            No resources to display.
                                        </Box>
                                        <Button>Create resource</Button>
                                    </Box>
                                }
                                filter={
                                    <SpaceBetween direction="vertical" size="xs">
                                        <TextFilter
                                        filteringPlaceholder="Search"
                                        filteringText=""
                                    />
                                    <DateRangePicker
                                        onChange={({ detail }) => setValue(detail.value)}
                                        value={value}
                                        relativeOptions={[
                                            {
                                                key: "previous-5-minutes",
                                                amount: 5,
                                                unit: "minute",
                                                type: "relative"
                                            },
                                            {
                                                key: "previous-30-minutes",
                                                amount: 30,
                                                unit: "minute",
                                                type: "relative"
                                            },
                                            {
                                                key: "previous-1-hour",
                                                amount: 1,
                                                unit: "hour",
                                                type: "relative"
                                            },
                                            {
                                                key: "previous-6-hours",
                                                amount: 6,
                                                unit: "hour",
                                                type: "relative"
                                            }
                                        ]}
                                        i18nStrings={{
                                            todayAriaLabel: "Today",
                                            nextMonthAriaLabel: "Next month",
                                            previousMonthAriaLabel: "Previous month",
                                            customRelativeRangeDurationLabel: "Duration",
                                            customRelativeRangeDurationPlaceholder:
                                                "Enter duration",
                                            customRelativeRangeOptionLabel: "Custom range",
                                            customRelativeRangeOptionDescription:
                                                "Set a custom range in the past",
                                            customRelativeRangeUnitLabel: "Unit of time",
                                            formatRelativeRange: e => {
                                                const t =
                                                    1 === e.amount ? e.unit : `${e.unit}s`;
                                                return `Last ${e.amount} ${t}`;
                                            },
                                            formatUnit: (e, t) => (1 === t ? e : `${e}s`),
                                            dateTimeConstraintText:
                                                "Range must be between 6 and 30 days. Use 24 hour format.",
                                            relativeModeTitle: "Relative range",
                                            absoluteModeTitle: "Absolute range",
                                            relativeRangeSelectionHeading: "Choose a range",
                                            startDateLabel: "Start date",
                                            endDateLabel: "End date",
                                            startTimeLabel: "Start time",
                                            endTimeLabel: "End time",
                                            clearButtonLabel: "Clear and dismiss",
                                            cancelButtonLabel: "Cancel",
                                            applyButtonLabel: "Apply"
                                        }}
                                        placeholder="Filter by a date and time range"
                                    />
                                    </SpaceBetween>
                                    
                                }
                                header={
                                    <Header
                                        actions={
                                            <Box float="right">
                                                <SpaceBetween direction="horizontal" size="xs">
                                                    <Button iconName="refresh" variant="primary">Refresh</Button>
                                                </SpaceBetween>
                                            </Box>
                                        }
                                    >
                                        System Events
                                    </Header>
                                }
                                pagination={
                                    <Pagination
                                        currentPageIndex={1}
                                        pagesCount={2}
                                        ariaLabels={{
                                            nextPageLabel: "Next page",
                                            previousPageLabel: "Previous page",
                                            pageLabel: pageNumber =>
                                                `Page ${pageNumber} of all pages`
                                        }}
                                    />
                                }
                                preferences={
                                    <CollectionPreferences
                                        title="Preferences"
                                        confirmLabel="Confirm"
                                        cancelLabel="Cancel"
                                        preferences={{
                                            pageSize: 10,
                                            visibleContent: [
                                                "variable",
                                                "value",
                                                "type",
                                                "description"
                                            ]
                                        }}
                                        pageSizePreference={{
                                            title: "Select page size",
                                            options: [
                                                { value: 10, label: "10 resources" },
                                                { value: 20, label: "20 resources" }
                                            ]
                                        }}
                                        visibleContentPreference={{
                                            title: "Select visible content",
                                            options: [
                                                {
                                                    label: "Main distribution properties",
                                                    options: [
                                                        {
                                                            id: "variable",
                                                            label: "Variable name",
                                                            editable: false
                                                        },
                                                        { id: "value", label: "Text value" },
                                                        { id: "type", label: "Type" },
                                                        {
                                                            id: "description",
                                                            label: "Description"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }}
                                    />
                                }
                            />
                        </Box>
                    </TabPanel>
                </Box>
            </div>
        </div>

    );
}
