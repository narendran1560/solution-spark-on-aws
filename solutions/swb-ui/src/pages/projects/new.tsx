/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */

import {
  Box,
  BreadcrumbGroupProps,
  SpaceBetween,
  Form,
  Tabs,
  Icon,
  Header,
  Input,
  FormField,
  Button,
  Container
} from '@awsui/components-react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useProjects } from '../../api/projects';
import { addUserToRole, createUser } from '../../api/users';
import { emailRegex, nameRegex } from '../../common/utils';
import BaseLayout from '../../components/BaseLayout';
import ProjectDetail from '../../components/ProjectDetail-v2';

import { CreateUserForm, CreateUserFormValidation } from '../../models/User';
import styles from '../../styles/ProjectItemcard.module.scss';

export interface UserProps {
  locale: string;
}

const User: NextPage = () => {
  // App settings constant

  const router = useRouter();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<CreateUserForm>({ email: '' });
  const [formErrors, setFormErrors] = useState<CreateUserFormValidation>({});

  const { projects, areProjectsLoading } = useProjects();

  const breadcrumbs: BreadcrumbGroupProps.Item[] = [
    {
      text: 'Cloud Jump',
      href: '/'
    },
    {
      text: 'Evolution',
      href: '/projects'
    },
    {
      text: 'Project Details',
      href: '/projects/new'
    }
  ];

  const validationRules = [
    {
      field: 'email',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && emailRegex.test(a),
      message: 'A valid email address is required.'
    },
    {
      field: 'email',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && a.length <= 128,
      message: 'Email cannot be longer than 128 characters'
    },
    {
      field: 'firstName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Given Name is Required'
    },
    {
      field: 'firstName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && a.length <= 128,
      message: 'Given Name cannot be longer than 128 characters'
    },
    {
      field: 'firstName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && nameRegex.test(a),
      message:
        'Given Name must start with an alphabetic character and can only contain alphanumeric characters (case sensitive) and hyphens.'
    },
    {
      field: 'lastName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a,
      message: 'Family Name is Required'
    },
    {
      field: 'lastName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && a.length <= 128,
      message: 'Family Name cannot be longer than 128 characters'
    },
    {
      field: 'lastName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      condition: (a: any) => !!a && nameRegex.test(a),
      message:
        'Family Name must start with an alphabetic character and can only contain alphanumeric characters (case sensitive) and hyphens.'
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateField = (field: keyof CreateUserForm, value: any): boolean => {
    for (const rule of validationRules.filter((f) => f.field === field)) {
      // eslint-disable-next-line security/detect-object-injection
      if (!rule.condition(value)) {
        setFormErrors((prevState: CreateUserFormValidation) => ({
          ...prevState,
          [`${field}Error`]: rule.message
        }));
        return false;
      }
    }
    setFormErrors((prevState: CreateUserFormValidation) => ({ ...prevState, [`${field}Error`]: '' }));
    return true;
  };

  const submitForm = async (): Promise<void> => {
    setIsSubmitLoading(true);
    try {
      await createUser(formData);
    } catch {
      setError('There was a problem creating user.');
    }

    try {
      await addUserToRole(formData.email, 'Researcher');
      await router.push({
        pathname: '/users',
        query: {
          message: 'Researcher Created Successfully',
          notificationType: 'success'
        }
      });
    } catch {
      setError('There was a problem assigning user to Researcher role.');
    } finally {
      setIsSubmitLoading(false);
    }
  };

  useEffect(() => {
    setDisableSubmit(
      !validationRules.every((rule) => rule.condition(formData[rule.field as keyof CreateUserForm]))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const TabOne = () => {
    return (
      <> 
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui
          voluptas tenetur inventore ut quis?
        </p>
      </>
    )
  }


  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const tabDataOne = () => {
    return (
      <Container>
        <h1>Hello World!</h1>
      </Container>)
      }

  const getContent = (): JSX.Element => {
    return (
      <Container>
        <Box>
          <Form
          // header={
          //   <div className={styles.projectHeader}>
          //     <div className={styles.sectionTitle}>
          //       <span>Evolution</span>
          //       <span className={styles.secHeading}>OVERVIEW</span>
          //       <span className={styles.secHeading}>FILES</span>
          //       <span className={styles.thiHeading}>SESSION TEMPLATES</span> 
          />
          <ProjectDetail
            isLoading={areProjectsLoading}
            allItems={projects}
            onSelect={async (selected) => await onSelectEnvType(selected.selectedItems)}
          />
          <Form
            className={styles.displayNone}
            header={
              <>
                <Header
                  actions={
                    <Box float="right">
                      <SpaceBetween direction="horizontal" size="xs">
                        <Button
                        >
                          Pause
                        </Button>
                        <Button>
                          Stop
                        </Button>
                        <Button 
                        >
                          Sync
                        </Button>
                        <Button>
                          Add Budget
                        </Button>
                        <Button>
                          Archive
                        </Button>
                      </SpaceBetween>
                    </Box>
                  }
                >
                  Project Details
                </Header>
              </>
            }
          >
            <Tabs
              tabs={[
                {
                  label: "Project Details",
                  id: "first",
                  content: tabDataOne
                },
                {
                  label: "Sessions",
                  id: "second",
                  content: "Second tab content area"
                },
                {
                  label: "Files",
                  id: "third",
                  content: "Third tab content area"
                },
                {
                  label: "User Activity",
                  id: "four",
                  content: "Four tab content area"
                }
              ]}
              
            />
          </Form>

        </Box>
      </Container>
    );
  };

  return (
    <BaseLayout breadcrumbs={breadcrumbs} activeHref="/users">
      {getContent()}
    </BaseLayout>
  );
};

export default User;
