import React, {useState,useEffect} from 'react';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import { isEmail } from '@formiz/validations';
import { Button, Grid, Box } from '@chakra-ui/core';
import { FieldInput } from './Fields/FieldInput';
import { PageHeader } from './PageHeader';
import { PageLayout } from './PageLayout';
import { useToastValues } from './useToastValues';
import { FieldSelect } from './Fields/FieldSelect';
import { AddPlaceholder } from './AddPlaceholder';
import { useDarkTheme } from './isDarkTheme';
import {
  IconButton, Stack,
} from '@chakra-ui/core';
import { FieldPickIdenticalImages } from '../Components/Fields/FieldPickIdenticalImages';
export const Wizard = () => {
  const [sintomas, setSintomas] = useState([]);
  const form = useForm();
  const toastValues = useToastValues();
  const isDarkTheme = useDarkTheme();

  useEffect(() => {
    setSintomas([]);
  }, [form.resetKey]);

  const addItem = () => {
    setSintomas((s) => [
      ...s,
      {
          id:s,
      },
    ]);
  };

  const removeItem = (id) => {
    setSintomas((s) => s.filter((x) => x.id !== id));
  };

  const handleSubmit = (values) => {
    toastValues(values);
    form.invalidateFields({
      name: 'You can display an error after an API call',
    });
    const stepWithError = form.getFieldStepName('name');
    form.goToStep(stepWithError);
  };

  return (
    <Formiz
      connect={form}
      onValidSubmit={handleSubmit}
    >
      <PageLayout>
        <form
          noValidate
          onSubmit={form.submitStep}
        >
          <PageHeader >
            Bienvenido
          </PageHeader>
          <FormizStep name="step1">
            <FieldInput
              name="cedula"
              label="Cedula de Identidad"
              required="Obligatorio"
            />
          </FormizStep>
          <FormizStep name="step2">
              <FieldSelect
                name="contactoC"
                label="Ha estado usted en contacto con una persona contagiada de Corona Virus"
                required="Obligatorio"
                placeholder="Seleccione una opción"
                defaultValue="No"
                options={[
                  {
                    value: '1',
                    label: 'Si',
                  },
                  {
                    value: '0',
                    label: 'No',
                  },
                  {
                    value: '-1',
                    label: 'No lo se',
                  },
                ]}
              />
          </FormizStep>
          <FormizStep name="step3">
          <FieldSelect
                name="contactoS"
                label="Ha estado usted en contacto con una persona sospechosa de contagio de Corona Virus"
                required="Obligatorio"
                placeholder="Seleccione una opción"
                defaultValue="No"
                options={[
                  {
                    value: '1',
                    label: 'Si',
                  },
                  {
                    value: '0',
                    label: 'No',
                  },
                  {
                    value: '-1',
                    label: 'No lo se',
                  },
                ]}
              />
          </FormizStep>
          
          <FormizStep name="step4">
          <FieldSelect
                name="presenciaF"
                label="Ha estado usted durante los ultimos 15 días en un país o ciudad con casos confirmados de Coronavirus "
                required="Obligatorio"
                placeholder="Seleccione una opción"
                defaultValue="No"
                options={[
                  {
                    value: '1',
                    label: 'Si',
                  },
                  {
                    value: '0',
                    label: 'No',
                  },
                  {
                    value: '-1',
                    label: 'No lo se',
                  },
                ]}
              />
          </FormizStep>
          <FormizStep name="step5">
          {sintomas.map((sintoma, index) => (
        <Stack
          key={sintoma.id}
          isInline
          spacing="4"
          mb="6"
          backgroundColor={isDarkTheme ? 'gray.700' : 'gray.50'}
          rounded="md"
          borderWidth="1px"
          borderColor={isDarkTheme ? 'gray.900' : 'gray.200'}
          p="4"
        >
          <Box flex="1">
          <FieldSelect
              name={`sintomas[${index}].nombre`}
              label="Ha presentado algun sintoma"
              required="Obligatorio: Seleccione o elimine el item"
              placeholder="Seleccione un sintoma"
              m="0"
              validations={[
                {
                  rule: (val) => (form.values.sintomas || [])
                    .filter((x) => x.nombre === val).length <= 1,
                  deps: [JSON.stringify(form.values.sintomas)],
                  message: 'Sintoma ya agregado',
                },
              ]}
                options={[
                  {
                    value: 'Congestion Nasal',
                    label: 'Congestion Nasal',
                  },
                  {
                    value: 'Dificultad para respirar',
                    label: 'Dificultad para respirar',
                  },
                  {
                    value: 'Dolor de garganta',
                    label: 'Dolor de garganta',
                  },
                  {
                    value: 'Dolor de músculos',
                    label: 'Dolor de músculos',
                  },
                  {
                    value: 'Escalofrio',
                    label: 'Escalofrio',
                  },
                  {
                    value: 'Fatiga',
                    label: 'Fatiga',
                  },
                  {
                    value: 'Fiebre',
                    label: 'Fiebre',
                  },
                  {
                    value: 'Flema',
                    label: 'Flema',
                  },
                  {
                    value: 'Malestar',
                    label: 'Malestar',
                  },
                  {
                    value: 'Tos',
                    label: 'Tos',
                  },
                  {
                    value: 'Mucosidad',
                    label: 'Mucosidad',
                  },
                ]}
              />

          </Box>

          <Box pt="1.75rem">
            <IconButton
              icon="delete"
              onClick={() => removeItem(sintoma.id)}
              variant="ghost"
            />
          </Box>
        </Stack>
      ))}
      {sintomas.length <= 20 && (
        <AddPlaceholder label="Añadir Sintoma" onClick={addItem} />
      )}
          </FormizStep>
          {!!form.steps.length && (
            <Grid templateColumns="1fr 2fr 1fr" alignItems="center">
              {!form.isFirstStep && (
                <Button
                  gridColumn="1"
                  onClick={form.prevStep}
                >
                  Anterior
                </Button>
              )}
              <Box
                gridColumn="2"
                textAlign="center"
                fontSize="sm"
                color="gray.500"
              >
                Paso {form.currentStep.index + 1} / {form.steps.length}
              </Box>
              <Button
                type="submit"
                gridColumn="3"
                variantColor="brand"
                isDisabled={
                  (form.isLastStep ? !form.isValid : !form.isStepValid)
                  && form.isStepSubmitted
                }
              >
                {form.isLastStep ? 'Diagnosticar' : 'Siguiente'}
              </Button>
            </Grid>
          )}
        </form>
      </PageLayout>
    </Formiz>
  );
};
export default Wizard;