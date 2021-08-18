export interface SearchBarProps {
    label?:  React.ReactNode|string ;
    placeholder?: string;
    urlTarget?: URL | string;
    onSubmit?: (searchText: string) => void
    buttonLabel?: string;
    width?: string;
    variant: 'outline' | 'underline'
}
