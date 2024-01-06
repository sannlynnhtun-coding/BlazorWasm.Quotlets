namespace BlazorWasm.Quotlets.Models
{

    public class UserModel
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string ImageUrl { get; set; }
        public SocialMediaModel[] Links { get; set; }
    }

    public class SocialMediaModel
    {
        public string Name { get; set; }
        public string Link { get; set; }
    }

}
