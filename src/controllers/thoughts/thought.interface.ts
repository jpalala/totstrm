interface IThought {
    id: number;
    author: string;
    content: string;
    title: string;
    public: boolean; 
    created_at: Date;
}

export default IThought
