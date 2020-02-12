export class Languages {
    language: string;
    frameworks: string[];

}

export class Qualifications {
    degree_name: string;
    institution: string;
    degree_type: string;
    graduated: string;
    grade: string;
}

export class Cv {
    _id: string;
    name: string;
    bio: string;
    exp: {
        languages: Languages[];
        description: string;
        lang_type: string
    };
    qualifications: Qualifications[];
    links: [{
        site: string;
        link: string;
    }];
}