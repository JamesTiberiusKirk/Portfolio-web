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

export class Exp {
    languages: Languages[];
    description: string;
    lang_type: string
}

export class Link {
    site: string;
    link: string;
}

export class Cv {
    _id: string;
    name: string;
    bio: string;
    exp: Exp[];
    qualifications: Qualifications[];
    links: Link[];
}