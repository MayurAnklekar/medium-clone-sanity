export interface Post{
    comments: any;
    _id: string;
    _createdAt: string;
    title: string;
    author:{
        name: string;
        image: string;
    };
    comment: Comment[];
    description: string;
    mainImage: {
        asset:{
            url: string;
        }
    };
    slug:{
        current: string;
    };
    body: [object]; 


}

export interface Comment{
    _id: string;
    approved: boolean;
    comment: string;
    email: string;
    name: string;
    post: {
        _ref: string;
        _type: string;
    }
    _createdAt: string;
    _rev: string;
    _type: string;
    _updatedAt: string;

}