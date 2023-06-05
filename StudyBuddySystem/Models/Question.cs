using System;
using System.Collections.Generic;

namespace StudyBuddySystem.Models;

public partial class Question
{
    public int Id { get; set; }

    public string? QuestionTitle { get; set; }

    public string? Answer { get; set; }
}
