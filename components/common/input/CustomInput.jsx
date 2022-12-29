import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from "@chakra-ui/react";

export default function CustomInput(props) {
  const {
    id,
    label,
    icon,
    type = "text",
    size = "md",
    placeholder,
    value,
    name,
    error,
    isRequired = false,
    onChange
  } = props;

  return (
    <FormControl id={id} isInvalid={error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup borderColor={"#E0E1E7"}>
        <InputLeftElement
          pointerEvents="none"
        >
          {icon}
        </InputLeftElement>
        <Input
          type={type}
          size={size}
          placeholder={placeholder}
          focusBorderColor={useColorModeValue("primary.700", "secondary.700")}
          value={value}
          onChange={(e) => {
            onChange(e.target.value, name);
          }}
          _hover={{
            borderColor: useColorModeValue("primary.700", "secondary.700")
          }}
          _placeholder={{ color: "secondary.500" }}
          name={name}
          autoComplete={"off"}
        />
      </InputGroup>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  )
}