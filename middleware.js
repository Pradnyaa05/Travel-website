const ExpressError=require("./utils/ExpressError.js");
const {listingSchema,reviewSchema}=require("./Schema.js");
const Listing=require("./models/listing");
const Review=require("./models/review");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be looged in to create listing");
         return res.redirect("/login");
      }
      next();
}
// module.exports.saveRedirectUrl=(req,res,next)=>{
//     if(req.session.redirectUrl){
//         res.local.redirectUrl=req.session.redirectUrl;
//     }
//     next();
// };

module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
      req.flash("error","You are not the owner of the listings");
       return res.redirect(`/listings/${id}`);
    }
    next();
};
module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    
    if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errMsg);
    }else{
      next();
    }
  };

  module.exports.validateReview=(req,res,next)=>{
      let {error}=reviewSchema.validate(req.body);
      
      if(error){
        let errMsg=error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
      }else{
        next();
      }
    };

    module.exports.isreviewAuthor=async(req,res,next)=>{
      let {id,reviewId}=req.params;
      let review=await Review.findByIdAndUpdate(reviewId);
      if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of the listings");
         return res.redirect(`/listings/${id}`);
      }
      next();
  };