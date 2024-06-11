interface IInput{
    title?: string,
    type: string,
    placeholder: string
}
type inputText = IInput[]

export const inputData:inputText = [
    {
        title: "Name",
        type: "text",
        placeholder: "Your name"
    },
    {
        title: "Email",
        type: "email",
        placeholder: "Your email"
    },
    {
        title: "Password",
        type: "password",
        placeholder: "Your password"
    },
    {
        title: "Confirm password",
        type: "password",
        placeholder: "Confirm password"
    },
    {
        title: "Full or short movie name",
        type: "text",
        placeholder: "Your text"
    },
    {
        title: "New password",
        type: "password",
        placeholder: "New password"
    }
]