import client from "./client.js";

export const getCompetences = async () => {
    try{
        const entries = await client.getEntries({content_type: "competence",  limit: 200});
        const filteredEntries = entries.items.map((data) => {
            const filteredEntry = data.fields;
            return filteredEntry;
        });
        return filteredEntries;
    } catch (error) {
        console.log(error);
    }
};

export const getSingleCompetence = async (slug) => {
    try{
        const entries = await client.getEntries({"fields.slug" : slug, content_type:"competence"});
        return entries;
    }catch(error){
        console.log(error)
    }
};