/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCollection } from '@awsui/collection-hooks';
import {
  Box,
  BreadcrumbGroupProps,
  Button,
  Header,
  SpaceBetween,
  Cards,
  CardsProps,
  Table,
  Container,
  Form,
  FormField,
  ExpandableSection,
  StatusIndicator
} from '@awsui/components-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useEnvironmentType } from '../../api/environmentTypes';
import { useProjects } from '../../api/projects';
import { useUsers } from '../../api/users';


import { nameRegex } from '../../common/utils';

import BaseLayout from '../../components/BaseLayout';
import EnvTypeCards from '../../components/EnvTypeCards';
import ProjectItemCards from '../../components/ProjectItemCards';

import { useSettings } from '../../context/SettingsContext';

import { CreateEnvironmentForm, CreateEnvironmentFormValidation } from '../../models/Environment';
import { EnvTypeItem } from '../../models/EnvironmentType';
import { EnvTypeConfigItem } from '../../models/EnvironmentTypeConfig';
import { ProjectItem } from '../../models/Project';
import styles from '../../styles/ProjectItemcard.module.scss';

interface OnSelectEnvTypeConfigFunction {
  (selection: CardsProps.SelectionChangeDetail<ProjectItem>): void;
}

export interface EnvTypeConfigsProps {
  onSelect: OnSelectEnvTypeConfigFunction;
  allItems: ProjectItem[];
  isLoading?: boolean;
}

export interface UserProps {
  locale: string;
}

const Project: NextPage = () => {
  // App settings constant
  const { settings } = useSettings();
  const { users, mutate } = useUsers();
  const [error, setError] = useState('');
  
  const { envTypes, areEnvTypesLoading } = useEnvironmentType();
  const { projects, areProjectsLoading } = useProjects();
  
  
  const [selectedEnvType, setSelectedEnvType] = useState<ProjectItem>();
  const [formErrors, setFormErrors] = useState<CreateEnvironmentFormValidation>({});

  const [formData, setFormData] = useState<CreateEnvironmentForm>({});
  
  const validationRules = [
    {
      field: 'name',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Workspace Name is Required'
    },
    {
      field: 'name',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && nameRegex.test(a),
      message:
        'Workspace Name must start with an alphabetic character and can only contain alphanumeric characters (case sensitive) and hyphens.'
    },
    {
      field: 'name',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && a.length <= 128,
      message: 'Workspace Name cannot be longer than 128 characters'
    },
    {
      field: 'projectId',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Project ID is Required'
    },
    {
      field: 'envTypeId',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Compute Platform is Required'
    },
    {
      field: 'envTypeConfigId',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Configuration is Required'
    },
    {
      field: 'description',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !a || a.length <= 500,
      message: 'Description cannot be longer than 500 characters'
    },
    {
      field: 'description',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Description is Required'
    }
  ];
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateField = (field: keyof CreateEnvironmentForm, value: any): boolean => {
    for (const rule of validationRules.filter((f) => f.field === field)) {
      // eslint-disable-next-line security/detect-object-injection
      if (!rule.condition(value)) {
        setFormErrors((prevState: CreateEnvironmentFormValidation) => ({
          ...prevState,
          [`${field}Error`]: rule.message
        }));
        return false;
      }
    }
    setFormErrors((prevState: CreateEnvironmentFormValidation) => ({ ...prevState, [`${field}Error`]: '' }));
    return true;
  };
  
  const onSelectEnvType = async (selection: ProjectItem[]): Promise<void> => {
    const selected = (selection && selection.at(0)) || undefined;
    setSelectedEnvType(selected);
    setFormData({
      ...formData,
      envTypeId: selected?.id,
      envTypeConfigId: undefined,
      datasetIds: []
    });
    validateField('envType', selected?.id);
    validateField('envTypeConfigId', undefined);
  };

  // App layout constants
  const breadcrumbs: BreadcrumbGroupProps.Item[] = [
    {
      text: 'Cloud Jump',
      href: '/'
    },
    {
      text: 'Projects',
      href: '/projects'
    }
  ];

  const getContent = (): JSX.Element => {
    
    // const itemType: string = 'Configurations';
    // const { items } = useCollection(props.allItems, {});
    // const [selectedItems, setSelectedItems] = useState<EnvTypeConfigItem[]>([]);
    // useEffect(() => {
    //   setSelectedItems([]); //clean selection on reload items
    // }, []);
    
    // const [
    //   selectedItems,
    //   setSelectedItems
    // ] = useState([{ name: "Item 2", alt: "First", description: "This is the first item", type: "1A", size: "Small" }]);
    
    return (
      // <Cards
      //   onSelectionChange={({ detail }) => {
      //     setSelectedItems(detail.selectedItems);
      //     props.onSelect(detail);
      //   }}
      //   selectedItems={selectedItems}
      //   cardDefinition={{
      //   header: (e) => e.name,
      //   sections: [
      //     {
      //       id: 'estimatedCost',
      //       content: (e) => e.estimatedCost,
      //       header: 'Estimated Cost'
      //     },
      //     {
      //       id: 'instanceType',
      //       content: (e) => e.type,
      //       header: 'Instance Type'
      //     }
      //   ]
        
      //   }}
      //   cardsPerRow={[{ cards: 1 }, { minWidth: 300, cards: 3 }]}
      //   items={items}
      //   loading={props.isLoading}
      //   loadingText="Loading Configurations"
      //   selectionType="single"
      //   trackBy="id"
      //   visibleSections={['estimatedCost', 'instanceType']}
      //   empty={
      //     <Box textAlign="center" color="inherit">
      //       <b>No {itemType}</b>
      //       <Box padding={{ bottom: 's' }} variant="p" color="inherit">
      //         No {itemType} to display.
      //       </Box>
      //     </Box>
      //   }
      // />
      
      // <Cards
      //   ariaLabels={{
      //     itemSelectionLabel: (e, t) => `select ${t.name}`,
      //     selectionGroupLabel: "Item selection"
      //   }}
      //   cardDefinition={{
      //     header: e => e.name,
      //     sections: [
      //       {
      //         id: "id",
      //         header: "Id",
      //         content: e => e.id
      //       },
      //       {
      //         id: "name",
      //         header: "Name",
      //         content: e => e.name
      //       },
      //       {
      //         id: "estimatedCost",
      //         header: "estimatedCost",
      //         content: e => e.estimatedCost
      //       },
      //       {
      //         id: "type",
      //         header: "Type",
      //         content: e => e.type
      //       }
      //     ]
      //   }}
      //   cardsPerRow={[
      //     { cards: 1 },
      //     { minWidth: 500, cards: 2 }
      //   ]}
      //   items={[
      //     {
      //       id: "Item 1",
      //       name: "First",
      //       estimatedCost: 21,
      //       type: "S3"
      //     },
      //     {
      //       id: "Item 2",
      //       name: "Second",
      //       estimatedCost: 22,
      //       type: "Nextflow"
      //     },
      //     {
      //       id: "Item 3",
      //       name: "Third",
      //       estimatedCost: 23,
      //       type: "Cromwell"
      //     }
      //   ]}
      //   loadingText="Loading resources"
      //   selectionType="multi"
      //   trackBy="name"
      //   visibleSections={["description", "type", "size"]}
      //   empty={
      //     <Box textAlign="center" color="inherit">
      //       <b>No resources</b>
      //       <Box
      //         padding={{ bottom: "s" }}
      //         variant="p"
      //         color="inherit"
      //       >
      //         No resources to display.
      //       </Box>
      //       <Button>Create resource</Button>
      //     </Box>
      //   }
      // />
      
      <Container className={styles.containerBox}
      header={
        <div className={styles.projectHeader}>
          <div className={styles.sectionTitle}>My Projects (4)</div>
          <div className={styles.sectionAction}>
            <span>+ Add new</span>
          </div>
        </div>
      }
      >
        <Form
            
          >
          <ProjectItemCards
                      isLoading={areProjectsLoading}
                      allItems={projects}
                      onSelect={async (selected) => await onSelectEnvType(selected.selectedItems)}
                    />
            
          </Form>
      </Container>
       
      
    );
  };
  return (
    <BaseLayout breadcrumbs={breadcrumbs} activeHref="/projects">
      {getContent()}
    </BaseLayout>
  );
};

export default Project;
