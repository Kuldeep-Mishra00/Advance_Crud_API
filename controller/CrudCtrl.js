import { CreateModel } from "../Moddel/CrudModdel.js"

export const createctrl = async(req,resp)=>{
    try {
        const { name, description, price, quantity} =req.body

        //validation
      switch (true) {
        case !name:
          return resp.status(500).send({ error: "Name is Required" });
        case !description:
          return resp.status(500).send({ error: "Description is Required" });
        case !price:
          return resp.status(500).send({ error: "Price is Required" });
        case !quantity:
          return resp.status(500).send({ error: "Quantity is Required" });
      }

    //   console.log(req.body)
        const object = await new CreateModel(req.body)
        object.save();
        resp.status(201).send({
            success: true,
            message: "created Successfully",
        });
    } catch (error) {
        resp.status(500).send({
            success: false,
            message: "Errro in create object",
            error,
        });
    }
}

//get all object
export const GetallCtrl = async(req, resp)=>{
    const objects = await CreateModel.find({});
    resp.status(200).send({success: true,objects});
}

//upadte Controller

export const Updatectrl = async(req,resp)=>{
    try {
        const { name, description, price, quantity} =req.body

        //validation
      switch (true) {
        case !name:
          return resp.status(500).send({ error: "Name is Required" });
        case !description:
          return resp.status(500).send({ error: "Description is Required" });
        case !price:
          return resp.status(500).send({ error: "Price is Required" });
        case !quantity:
          return resp.status(500).send({ error: "Quantity is Required" });
      }

      const object = await CreateModel.findByIdAndUpdate(
        req.params.id,
        {
            name:name,
            description:description,
            price:price,
            quantity:quantity
        })

        object.save()

        resp.status(201).send({
            success: true,
            message: "updated Successfully",
        });
    } catch (error) {
        resp.status(500).send({
            success: false,
            message: "Errro in update object",
            error,
        });
    }

}

//Delete Controller

export const DeleteCtrl = async(req,resp) =>{
try {
    const obj = await CreateModel.findByIdAndDelete(req.params.id)
    resp.status(200).send("data deleted")
} catch (error) {
    resp.status(500).send({
        success: false,
        message: "Errro in delete object",
        error,
    });
}
}

//Serach Contorller

export const SearchCtrl = async(req,resp)=>{
    const keyword = req.params.keyword 
    const result = await CreateModel.find({
        $or:[
            { name: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } }
        ]
    })
    resp.send(result);
}