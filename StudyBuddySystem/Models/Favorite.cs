using System;
using System.Collections.Generic;

namespace StudyBuddySystem.Models;

public partial class Favorite
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? QuestionId { get; set; }
}
