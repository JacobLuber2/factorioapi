import query from "../db/utils.js";
export const findAll = async () => {
    return await query("SELECT * FROM factorio");
};
export const findOne = async (id) => {
    return await query("SELECT * FROM factorio WHERE id = ?", [id]);
};
export const AddOne = async (factorio, requesttype) => {
    if (factorio.items) {
        return await query("INSERT INTO factorio (items, requesttype) VALUES (?, ?)", [factorio.items, requesttype]);
    } if (factorio.fluids) {
        return await query("INSERT INTO factorio (fluids, requesttype) VALUES (?, ?)", [factorio.fluids, requesttype]);
    } if (factorio.enemies) {
        return await query("INSERT INTO factorio (enemies, requesttype) VALUES (?, ?)", [factorio.enemies, requesttype]);
    } if (factorio.terrains) {
        return await query("INSERT INTO factorio (terrains, requesttype) VALUES (?, ?)", [factorio.terrains, requesttype]);
    }
};
export const update = async (factorio, id) => {
   // if (factorio.items) {
        const result = await query("UPDATE factorio SET ? WHERE id = ?", [factorio, id]);
       // if (result.affectedRows === 1) {
            return { message: "Update successful" };
       // }
  //  } 
};

export const remove = async (id) => {
    return await query("DELETE FROM factorio WHERE id = ?", [id]);
};
